"use client";

import ToggleSwitch from '@/app/components/toggleSwitch/ToggleSwitch';
import './style.css'
import DragAndDrop from '../components/dragAndDrop/DragAndDrop';

export default function Postech() {
    return (
            <section className="main-container">
                <section className="main-content">
                    <div className='search-file'>
                        <div className="container-search">
                            <DragAndDrop />
                            <div className='questions-postech'>
                                <p className="toggle-text">
                                    Desafio?
                                </p>
                                <ToggleSwitch />
                                <label>Número do Capítulo:</label>
                                <input type="text" />

                            </div>
                            <div>
                                <input type="button" value="Gerar" className="generate" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    );
}