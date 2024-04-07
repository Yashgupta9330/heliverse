import { Input } from "@/components/ui/input";
import { setsearch } from "@/slices/SearchSlice";
import { setavailable, setdomain, setgender } from "@/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";


export function Filter({domain}) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter); 
  const {search} = useSelector(state => state.search);
  const handleSearchChange = (e) => {
    dispatch(setsearch(e.target.value));
  };

  return (
    <div className='flex-col lg:flex-row flex mt-12 mb-12 gap-4'>
      <Input placeholder="Search by name" value={search} onChange={handleSearchChange} />
      <select value={filters.gender || ''} onChange={(e) => dispatch(setgender(e.target.value))}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Agender">Agender</option>
      </select>
      <select value={filters.domain || ''} onChange={(e) => dispatch(setdomain(e.target.value))}>
        <option value="">All Domain</option>
        {domain.map((dom) => (
          <option key={dom} value={dom}>{dom}</option>
        ))}
      </select>
      <select value={filters.available || ''} onChange={(e) => dispatch(setavailable(e.target.value))}>
        <option value="">All Availabilities</option>
        <option value="true">Available</option>
        <option value="false">Unavailable</option>
      </select>
    </div>
  );
}
