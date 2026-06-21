const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const { pathToFileURL } = require("url");

const HTML_FILE = "index.html";
const OUTPUT_FILE = "Freymer_Sepulveda.pdf";

const generatePdf = async () => {
  const htmlPath = path.resolve(__dirname, HTML_FILE);
  const outputPath = path.resolve(__dirname, OUTPUT_FILE);

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`No se encontró el archivo: ${htmlPath}`);
  }

  const fileUrl = pathToFileURL(htmlPath).href;
  const browser = await puppeteer.launch({ headless: true });

  try {
    const page = await browser.newPage();

    await page.setViewport({ width: 794, height: 1123 });
    await page.goto(fileUrl, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");

    await page.pdf({
      path: outputPath,
      width: "210mm",
      height: "297mm",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    console.log(`PDF generado: ${outputPath}`);
  } finally {
    await browser.close();
  }
};

generatePdf().catch((error) => {
  console.error("Error al generar el PDF:", error.message);
  process.exit(1);
});
