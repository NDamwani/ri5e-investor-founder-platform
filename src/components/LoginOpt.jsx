import PrimaryButton from "./common/PrimaryButton";

export default function LoginOpt({ updateLoginInfo }) {
  const primaryButtonClass =
    "bg-white text-black font-semibold py-2 px-6 rounded transition hover:bg-gray-300 w-full my-2";
  return (
    <div className="h-screen flex justify-center content-center">
      <div className="p-4 flex flex-col content-center justify-center gap-8">
        <PrimaryButton
          name="Log in as Product Owner"
          className={primaryButtonClass}
          handleClick={() => updateLoginInfo("productOwner")}
        />
        <PrimaryButton
          name="Log in as Mentor"
          className={primaryButtonClass}
          handleClick={() => updateLoginInfo("mentor")}
        />
      </div>
    </div>
  );
}
