"use client";

import ToggleSwitch from '@/app/components/toggleSwitch/ToggleSwitch';
import Link from 'next/link';
import Tooltip from '@/app/components/Tooltip/Tooltip';
import DragAndDrop from '../components/dragAndDrop/DragAndDrop';
import './style.css'
export default function Graduacao() {
    return (
        <div>
            <div style={{ display: 'flex', height: '100vh' }}>
                <nav className="options">
                    <ul>
                        <li>
                            <Link href="/Graduacao" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Graduação
                            </Link>
                        </li>
                        <li>
                            <Link href="/PosTech" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Pós-Tech
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div className="container-logo">
                        <img src="logo-fiap.png" alt="Logo Fiap" />
                    </div>
                </div>
                <section className="main-container">
                    <section className="main-content">
                        <div className='search-file'>
                            <div className="container-search">
                                <DragAndDrop />
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
                                    <input type="button" value="Gerar" className="generate" />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
            );
}