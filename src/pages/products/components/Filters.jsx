import {MainFilter, FilterList, FilterItems, FilterLabel, FilterImg} from '../../../UI/MainStyled';

function FilterItem({ label }) {
    return (
        <FilterItems>
            <FilterLabel>{label}</FilterLabel>
            <FilterImg src="assets/filter.svg" alt="filtro" />
        </FilterItems>
    );
}

function Filters({ filters }) {
    return (
        <MainFilter>
            <FilterList>
                {filters.map(f => <FilterItem key={f.id} label={f.label} />)}
            </FilterList>
        </MainFilter>
    );
}

export default Filters;