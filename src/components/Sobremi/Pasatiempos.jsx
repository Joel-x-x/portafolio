const Pasatiempos = () => {
  return (
    <div className="w-2/6 flex justify-center flex-col items-center self-center">
      <h3 className="text-gris-200 text-3xl font-paint mb-10">Pasatiempos</h3>
      <div className="text-4xl grid grid-cols-3 grid-rows-3">
        <span>🎬</span>
        <span className="col-start-3 col-end-4 rotate-12">🎹</span>
        <span className="row-start-2 row-end-3 col-start-2 col-end-3 rotate-90">🚲</span>
        <span className="row-start-3 row-end-4 -rotate-[150deg]">🎧</span>
        <span className="row-start-3 row-end-4 col-start-3 col-end-4 rotate-45">📓</span>
      </div>
    </div> 
  );
}

export default Pasatiempos