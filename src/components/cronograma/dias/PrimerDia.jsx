import JSON from "./dias.json"

import "./secciones_cronograma.css"

var actividades = JSON.primer_dia

function PrimerDia() {
  return (
    <div className="PrimerDia">
      <div className="cronograma">
        {actividades.map((actividad) => {
          return (
            <div className="franja_horaria">
              <div className="hora">
                {actividad.inicio} - {actividad.fin}
              </div>
              <div className="eventos">
                {actividad.eventos.map((evento) => {
                  return (
                    <div className="evento">
                      {evento}
                    </div>
                  )
                })}
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
}

function Evento() {
  return (
    <div className="evento">
      <div className="hora">
        23:00
      </div>
      <div className="evento_nombre">

      </div>

    </div>
  )
}

export default PrimerDia;