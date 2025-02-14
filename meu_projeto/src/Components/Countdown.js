import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Importando o arquivo de CSS para estilizar

const Countdown = () => {
  // Definindo o tempo inicial (600 horas em segundos)
  const [tempoRestante, setTempoRestante] = useState(600 * 60 * 60); // 600 horas * 60 minutos * 60 segundos

  useEffect(() => {
    // Se o tempo restante for maior que 0, decremente-o a cada segundo
    if (tempoRestante > 0) {
      const intervalo = setInterval(() => {
        setTempoRestante(prevTempo => prevTempo - 1);
      }, 1000);

      return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado
    }

    return undefined; // Caso contrário, não faça nada
  }, [tempoRestante]);

  // Converte o tempo restante em horas, minutos e segundos
  const horas = Math.floor(tempoRestante / 3600);
  const minutos = Math.floor((tempoRestante % 3600) / 60);
  const segundos = tempoRestante % 60;

  return (
    <div className="countdown-container">
      <div className="countdown-timer">
        <div className="time-unit">
          <span className="number">{String(horas).padStart(2, '0')}</span>
          <span className="label">Horas</span>
        </div>
        <div className="time-unit">
          <span className="number">{String(minutos).padStart(2, '0')}</span>
          <span className="label">Minutos</span>
        </div>
        <div className="time-unit">
          <span className="number">{String(segundos).padStart(2, '0')}</span>
          <span className="label">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
