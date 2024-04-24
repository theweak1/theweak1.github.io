const DisplayProfile = ({ profile }) => {
  return (
    <div className="flex flex-wrap justify-center bg-bg-user dark:bg-bg-user-dark text-text dark:text-text-dark text-lg rounded-tl-3xl rounded-tr-3xl p-8">
      <figure className="w-11/12 max-w-52 my-5 mx-10">
        <img
          alt="user avatar"
          src={profile.avatar_url}
          className="border-2 border-accent h-auto max-w-full shadow-custom rounded-full"
        />
      </figure>
      <div className="flex flex-wrap items-center pl-5p">
        <h2 className="w-full text-center text-text m-0 box-border">
          <a
            href={profile.blog}
            className="text-accent hover:text-text dark:hover:text-text-dark"
          >
            <strong>{profile.name}</strong>
          </a>
        </h2>
        <p className="w-full m-0 p-0 border-b border-text dark:border-text-dark pb-5">
          {profile.bio}
        </p>
        <p className="w-full m-0 p-0 border-b border-text dark:border-text-dark pb-5">
          <strong>Location:</strong>
          {profile.location}
        </p>
        <p className="w-full m-0 p-0 border-b border-text dark:border-text-dark pb-5">
          <strong>@{profile.login} </strong>
          Repos: {profile.public_repos}
          Gists: {profile.public_gists}
        </p>
      </div>
    </div>
  );
};

export default DisplayProfile;
