function Home() {
  return (
    <div
      className="
			flex 
			justify-center 
			bg-slate-800
		"
    >
      <div
        className="
				container 
				grid 
				grid-cols-2 
				text-white
			"
      >
        <div
          className="
					flex 
					flex-col 
					items-center 
					justify-center
					gap-4
					py-4
				"
        >
          <h2
            className="
						text-5xl
						max-sm:text-2xl
						font-bold

					"
          >
            Seja Bem Vinde!
          </h2>
          <p className="text-xl">Aqui você encontra os melhores games.</p>

          <div
            className="
						flex
						justify-around
						gap-4
					"
          >
            <div
              className="
							rounded
							border-white
							border-solid
							border-2
							py-2
							px-4
							text-white
						"
            >
              Novo Produto
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1714775484705"
            alt="Imagem da Página Home"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
