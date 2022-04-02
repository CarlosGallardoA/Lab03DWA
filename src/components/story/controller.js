const stories = [
  {
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
    image:
      "https://phantom-marca.unidadeditorial.es/70cdeb1501a33c2c567dabbebc270ddd/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/17/16371568440299.jpg",
    description:
      "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people) worldwide.",
  },
];

export const list = (req, res) => {
  // lista los stories

  try {
    return res.status(200).json({
      ok: true,
      data: stories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: {
        message: "Error al listar los stories",
      },
    });
  }
};

export const store = (req, res) => {
  try {
    const body = req.body;
    body.id = stories.length + 1;
    stories.push(body);

    return res.status(201).json({
      ok: true,
      data: stories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

export const update = (req, res) => {
  // edita un story
  const { id } = req.params;
  const { name } = req.body;
  const { author } = req.body;
  const { image } = req.body;
  const { description } = req.body;
  try {
    const search = stories.find((story) => story.id === parseInt(id));
    if (search < 0) {
      return res.status(404).json({
        ok: false,
        data: "Story not found",
      });
    } else {
      search.name = name;
      search.author = author;
      search.image = image;
      search.description = description;
      return res.status(200).json({
        ok: true,
        data: search,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const destroy = (req, res) => {
  // elimina un story
  try {
    const { id } = req.params;
    const search = stories.filter((story) => story.id !== parseInt(id));
    res.status(200).json(search);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
