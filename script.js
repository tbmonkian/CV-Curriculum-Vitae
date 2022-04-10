function generatePDF(){
    const element = document.getElementById("btnPDF");

    html2pdf()
        set({
            margin:1,
            filename:'CV_REVELLO.pdf',
            image:{
                type:'jpg',
                quality:0.98
            },
            html2canvas:{
                scale:3, //a mayor escala, mejor imágen, pero mayor peso
                letterRendering:true,
            },
            jsPDF:{
                unit:"in",
                format:"a3",
                orientation:'portrait'
            }
        })
        .from(element)
        .save();
}
