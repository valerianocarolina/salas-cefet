import ExcelJS from 'exceljs';
import fs from 'fs';

async function parseExcel() {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile("scripts/input/Ocupacao.xlsx");

    const sheet = workbook.worksheets[0];

    const salasMap = {};

    const header = [];
    sheet.getRow(1).eachCell((cell, colNumber) => {
        header[colNumber] = cell.value;
    });

    sheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;

        const sala = row.getCell(1).value;
        const bloco = row.getCell(2).value;
        const dia = row.getCell(3).value;

        if (!salasMap[sala]) {
            salasMap[sala] = {
                sala,
                bloco,
                ocupacoes: [],
            };
        }

        for (let col = 4; col <= row.cellCount; col++) {
            const horario = header[col];
            const valor = row.getCell(col).value;

            if (valor) {
                salasMap[sala].ocupacoes.push({
                    dia,
                    horario,
                });
            }
        }
    });

    const resultado = Object.values(salasMap);

    fs.writeFileSync(
        "src/data/salas.json",
        JSON.stringify(resultado, null, 2)
    );

    console.log("✅ JSON gerado!");
}

parseExcel();