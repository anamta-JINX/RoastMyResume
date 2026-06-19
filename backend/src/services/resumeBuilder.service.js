import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun
} from "docx";

function safeText(value = "") {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function normalizeList(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map((item) => safeText(item)).filter(Boolean);
  }

  return [safeText(value)].filter(Boolean);
}

function addHeading(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: {
      before: 240,
      after: 120
    }
  });
}

function addText(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text: safeText(text),
        size: 22
      })
    ],
    spacing: {
      after: 120
    }
  });
}

function addBullet(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text: safeText(text),
        size: 22
      })
    ],
    bullet: {
      level: 0
    },
    spacing: {
      after: 80
    }
  });
}

function buildResumePlainText(healedResume = {}) {
  const resume = healedResume.improvedResume || healedResume;

  const lines = [];

  if (resume.name) lines.push(safeText(resume.name).toUpperCase());
  if (resume.headline) lines.push(safeText(resume.headline));

  if (resume.summary) {
    lines.push("");
    lines.push("SUMMARY");
    lines.push(safeText(resume.summary));
  }

  const skills = normalizeList(resume.skills);
  if (skills.length) {
    lines.push("");
    lines.push("SKILLS");
    lines.push(skills.join(", "));
  }

  const projects = Array.isArray(resume.experienceOrProjects)
    ? resume.experienceOrProjects
    : [];

  if (projects.length) {
    lines.push("");
    lines.push("EXPERIENCE / PROJECTS");

    projects.forEach((project) => {
      lines.push(safeText(project.title || "Project"));
      normalizeList(project.bullets).forEach((bullet) => {
        lines.push(`- ${bullet}`);
      });
      lines.push("");
    });
  }

  const education = normalizeList(resume.education);
  if (education.length) {
    lines.push("");
    lines.push("EDUCATION");
    education.forEach((item) => lines.push(`- ${item}`));
  }

  const certifications = normalizeList(resume.certifications);
  if (certifications.length) {
    lines.push("");
    lines.push("CERTIFICATIONS");
    certifications.forEach((item) => lines.push(`- ${item}`));
  }

  return lines.join("\n").trim();
}

export async function createDocxResumeBuffer(healedResume = {}) {
  const resume = healedResume.improvedResume || healedResume;
  const children = [];

  if (resume.name) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: safeText(resume.name).toUpperCase(),
            bold: true,
            size: 34
          })
        ],
        spacing: {
          after: 100
        }
      })
    );
  }

  if (resume.headline) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: safeText(resume.headline),
            italics: true,
            size: 24
          })
        ],
        spacing: {
          after: 180
        }
      })
    );
  }

  if (resume.summary) {
    children.push(addHeading("Summary"));
    children.push(addText(resume.summary));
  }

  const skills = normalizeList(resume.skills);
  if (skills.length) {
    children.push(addHeading("Skills"));
    children.push(addText(skills.join(" • ")));
  }

  const projects = Array.isArray(resume.experienceOrProjects)
    ? resume.experienceOrProjects
    : [];

  if (projects.length) {
    children.push(addHeading("Experience / Projects"));

    projects.forEach((project) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: safeText(project.title || "Project"),
              bold: true,
              size: 24
            })
          ],
          spacing: {
            before: 120,
            after: 80
          }
        })
      );

      normalizeList(project.bullets).forEach((bullet) => {
        children.push(addBullet(bullet));
      });
    });
  }

  const education = normalizeList(resume.education);
  if (education.length) {
    children.push(addHeading("Education"));
    education.forEach((item) => children.push(addBullet(item)));
  }

  const certifications = normalizeList(resume.certifications);
  if (certifications.length) {
    children.push(addHeading("Certifications"));
    certifications.forEach((item) => children.push(addBullet(item)));
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children
      }
    ]
  });

  return Packer.toBuffer(doc);
}

function escapePdfText(text = "") {
  return safeText(text)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapLine(line = "", maxLength = 88) {
  const words = safeText(line).split(/\s+/);
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (next.length > maxLength) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);

  return lines.length ? lines : [""];
}

export function createPdfResumeBuffer(healedResume = {}) {
  const plainText = buildResumePlainText(healedResume);
  const wrappedLines = plainText
    .split("\n")
    .flatMap((line) => wrapLine(line, 88));

  const visibleLines = wrappedLines.slice(0, 48);

  let y = 760;
  const textCommands = ["BT", "/F1 11 Tf", "50 760 Td"];

  visibleLines.forEach((line, index) => {
    if (index === 0) {
      textCommands.push(`(${escapePdfText(line)}) Tj`);
    } else {
      y -= 14;
      textCommands.push(`0 -14 Td (${escapePdfText(line)}) Tj`);
    }
  });

  textCommands.push("ET");

  const content = textCommands.join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj",
    `5 0 obj\n<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream\nendobj`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${object}\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf);

  pdf += "xref\n";
  pdf += `0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });

  pdf += "trailer\n";
  pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += "startxref\n";
  pdf += `${xrefOffset}\n`;
  pdf += "%%EOF";

  return Buffer.from(pdf);
}

export function getResumeFileName(format = "docx") {
  const extension = format === "pdf" ? "pdf" : "docx";
  return `RoastMyResume-Healed-Resume.${extension}`;
}