import React, { useState } from "react"; 

function ComentarioRapida(){
    return(
        <div class="mb-3 comentario">
            <label for="exampleFormControlTextarea1" class="form-label titulo_av">Escreva um comentário:</label>
            <textarea class="form-control caixa_comentario" id="exampleFormControlTextarea1" rows="3"></textarea>

            <button type="submit" className="btn btn-primary botao_valeu_a_pena" style={{maxWidth: "250px"}}>
              Publicar Avaliação
            </button>
        </div>
        
    );
}

export default ComentarioRapida;