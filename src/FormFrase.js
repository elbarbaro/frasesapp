import React from 'react';

class FormFrase extends React.Component {

    constructor(props) {
        super(props);
        this.txtContenido = React.createRef();
        this.txtSignificado = React.createRef();
        this.txtNOfensividad = React.createRef();
        this.txtContexto = React.createRef();
    }

    submitFormulario = (e) => {
        e.preventDefault();
        // Current el elemento de DOM. Hablamos de un input
        var contenido = this.txtContenido.current.value;
        var significado = this.txtSignificado.current.value;
        var ofensividad = this.txtNOfensividad.current.value;
        var contexto = this.txtContexto.current.value;

        console.log(contenido);
        console.log(significado);
        console.log(ofensividad);
        console.log(contexto);
    }

    render() {
        return (
            <form onSubmit={ this.submitFormulario }>
                <div>
                    <label>Contenido</label>
                    <input type="text" ref={ this.txtContenido }/>
                </div>
                <div>
                    <label>Significado</label>
                    <input type="text" ref={ this.txtSignificado }/>
                </div>
                <div>
                    <label>Nivel ofensividad</label>
                    <select ref={ this.txtNOfensividad }>
                        <option value="1">Leve</option>
                        <option value="2">No tal leve</option>
                        <option value="3">Moderado</option>
                        <option value="4">Fuera de tono</option>
                        <option value="5">Ofensa</option>
                    </select>
                </div>
                <div>
                    <label>Contexto</label>
                    <input type="text" ref={ this.txtContexto } />
                </div>
                <input type="submit" value="Crear" />
            </form>
        );
    }
}

export default FormFrase;