// Este componente muestra la tabla de Pokémon.
// Cuando el usuario selecciona uno, avisamos al componente padre.

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const PokemonTable = ({ lista, onSelect }) => {
    return (
        <div style={{ marginTop: "2rem" }}>
            <h3>Lista de Pokémon</h3>

            <DataTable
                value={lista}
                selectionMode="single"
                dataKey="name"
                paginator rows={5}
                style={{ cursor: "pointer" }}
                onSelectionChange={(e) => onSelect(e.value)} // devolvemos el Pokémon seleccionado
            >
                <Column field="name" header="Nombre" />
                <Column field="url" header="URL" />
            </DataTable>
        </div>
    );
};

export default PokemonTable;
