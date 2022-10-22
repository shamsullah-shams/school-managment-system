import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

const CreatePDF = (data) => {
    const doc = new jsPDF()

    autoTable(doc, {
        head: [data.headers],
        body: [...data.body],
    })

    doc.save('table.pdf')
};


export default CreatePDF;