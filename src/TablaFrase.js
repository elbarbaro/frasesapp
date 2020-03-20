import React from 'react'

class TablaFrase extends React.Component {

    constructor(props) {
        super(props);
        this.frases = props.frases;
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Contenido</th>
                        <th>Significado</th>
                        <th>Ofensividad</th>
                        <th>Contexto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.frases.map(item => {
                            return (
                                <tr>
                                    <td>{ item.contenido }</td>
                                    <td>{ item.significado }</td>
                                    <td>{ item.ofensividad }</td>
                                    <td>{ item.contexto }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default TablaFrase;