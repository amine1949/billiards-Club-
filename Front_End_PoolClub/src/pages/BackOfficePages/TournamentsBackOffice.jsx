import FormTournament from "../../components/BackOfficeComponents/TournamentComponents/FormTournament";

const Tournaments = () => {
    return (
        <>
           <div className="p-4 pt-0 mt-5">
                <h1 className="text-3xl font-semibold text-[#538083]">Tournament Managment</h1>
                <FormTournament />
            </div>
        </>
    );
};

export default Tournaments;