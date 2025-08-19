import ReservationTable from "../../components/BackOfficeComponents/ReservationComponents/ReservationTable";

const Reservations = () => {
    return (
        <>
            <div className="p-4 pt-0 mt-5">
                <h1 className="text-3xl font-semibold text-[#538083]">Reservation Managment</h1>
                <ReservationTable />
            </div>
        </>
    );
};

export default Reservations;