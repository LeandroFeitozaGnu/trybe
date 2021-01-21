//  Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone .

db.movies.updateMany(
  { imdbRating: { $gt: 7 } },
  { $push: { category: "90's" } }
);