import "./MiBoton.css";

function MiBoton() {
  const descargarCV = () => {
    const urlPDF = "/ARIAS TORRES JHON cv.pdf";
    const enlace = document.createElement("a");
    enlace.href = urlPDF;
    enlace.download = "CV ARIAS TORRES.PDF";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  return (
    <button className="btn-descargar" onClick={descargarCV}>
      Descargar CV
    </button>
  );
}

export default MiBoton;
