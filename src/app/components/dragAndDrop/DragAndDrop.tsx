"use client";

import { useState } from 'react';
import { AiFillFileWord } from "react-icons/ai";
import './style.css';

export default function DragAndDrop() {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isFileReceived, setIsFileReceived] = useState(false);

    // Verificação se há arquivos no drag and drop
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Verificação se o arquivo é um .docx 
    const handleFiles = (files: FileList) => {
        const uploadedFile = files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.docx')) {
            setFile(uploadedFile);
            setIsFileReceived(true);
            console.log("Arquivo recebido:", uploadedFile.name);
        } else {
            alert("Por favor, selecione um arquivo .docx válido.");
        }
    };

    // Para quando o usuário solta o arquivo
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFiles(files);
        }
    };

    // Função para seleção manual dos arquivos
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFiles(files);
        }
    };

    return (
        <div
            className={`blank ${isDragging ? 'dragging' : ''}`} 
            onDragOver={handleDragOver}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {isFileReceived ? (
                <>
                    <AiFillFileWord size={100} color="#ed145b" className="word-icon" />
                    <p className="text-move-file">
                        Arquivo recebido: <strong>{file?.name}</strong>
                    </p>
                    <p className="text-search-file" style={{ color: 'green' }}>
                        Arquivo carregado com sucesso!
                    </p>
                </>
            ) : (
                <>
                    <AiFillFileWord size={100} color="#ed145b" className="word-icon" />
                    <p className="text-move-file">
                        Arraste o Arquivo .docx aqui.
                    </p>
                    <p className="text">
                        ou
                    </p>
                    <label htmlFor="file-input" className="text-search-file" style={{ cursor: 'pointer' }}>
                        Procure o Arquivo .docx aqui.
                    </label>
                </>
            )}
            <input
                id="file-input"
                type="file"
                accept=".docx"
                style={{ display: 'none' }}
                onChange={handleFileInput}
            />
        </div>
    );
}