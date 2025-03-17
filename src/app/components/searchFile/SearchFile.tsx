"use client";

import { AiFillFileWord } from "react-icons/ai";
import './style.css';
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import Tooltip from "../Tooltip/Tooltip";


export default function SearchFile() {
    return (
        <div className='search-file'>
            <div className="container-search">
                <div className="blank">
                    <AiFillFileWord size={100} color="#ed145b" className="word-icon" />
                    <p className="text-move-file">
                        Arraste o Arquivo .docx aqui.
                    </p>
                    <p className="text">
                        ou
                    </p>
                    <p className="text-search-file">
                        Procure o Arquivo .docx aqui.
                    </p>
                </div>
                <div className="toggle-container">
                    <p className="toggle-text">
                        Automatizado?
                    </p>
                    <ToggleSwitch />
                    <p className="toggle-text">
                        Extra?
                    </p>
                    <ToggleSwitch />
                </div>
                <div className="questions">
                    <label>Número do Capítulo:</label>
                    <input type="text" />
                    <Tooltip text="Os temas de 8 à 11 são para turma de PM, o tema 12 é para turmas TDS/ESO e o tema 13 é para turmas de DC, os temas 7 é utilizados para Nanos (2024).">
                        <p className="text-tooltip">
                            Tema
                        </p>
                    </Tooltip>
                    <input type="text" />
                    <Tooltip text="Somente os temas 2, 7, 12 e 13 possuem múltiplas versões.">
                        <p className="text-tooltip">
                            Versão
                        </p>
                    </Tooltip>
                    <input type="text" />
                </div>
                <div>
                    <input type="button" value="Gerar" className="generate"/>
                </div>
            </div>
        </div>
    );
}