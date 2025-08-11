import FormPartie from "../../components/BackOfficeComponents/PartiesComponents/FormPartie";
import PartiesTable from "../../components/BackOfficeComponents/PartiesComponents/PartiesTable";

const PartiesBackOffice = () => {
    return (
        <>
           <div className="p-4 pt-0 mt-5">
                <h1 className="text-3xl font-semibold text-[#538083]">Parties Managment</h1>
                <FormPartie/>
                <PartiesTable/>
            </div>
        </>
    );
};

export default PartiesBackOffice;