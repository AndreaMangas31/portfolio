import { useState, useEffect } from "react";
import { SemiCircleProgress } from "@mantine/core";
import { initialSoftSkills } from "./data";

export const SkillTabs = () => {
  const softSkills = initialSoftSkills;
  // Estado para manejar el valor de la barra de progreso animada
  const [progressValues, setProgressValues] = useState(
    softSkills.map(() => 0) // Inicializa todos los valores en 0
  );

  // Efecto para animar el progreso
  useEffect(() => {
    const timeouts = softSkills.map((_, index) => {
      return setTimeout(() => {
        setProgressValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = softSkills[index].percentage; // Actualiza el valor con el porcentaje correspondiente
          return newValues;
        });
      }, 400 * index); // Agrega un pequeño retraso para cada barra de progreso
    });

    // Limpiar timeouts cuando el componente se desmonte
    return () => timeouts.forEach(clearTimeout);
  }, [softSkills]);

  return (
    <div className="w-full bg-gray-800/30 rounded-b-md px-8">
      <ul className="flex flex-wrap justify-between gap-12 py-4">
        {softSkills.map((skill, index) => (
          <li
            className="flex flex-col justify-center items-center gap-2 py-8 px-4  rounded-lg"
            key={skill.name}
          >
            <SemiCircleProgress
              fillDirection="left-to-right"
              orientation="up"
              transitionDuration={500} // Duración de la animación
              filledSegmentColor="rgba(61, 189, 78, 0.6)"
              size={300}
              thickness={20}
              value={progressValues[index]} // Utiliza el valor animado
              labelPosition="center"
              label={`${progressValues[index]}%`} // Muestra el valor animado
              className="text-[30px] text-green-400"
            />
            <span className="font-bold">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
