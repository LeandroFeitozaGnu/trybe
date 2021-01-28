// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.


db.vendas.aggregate([
  { $match: { status: "ENTREGUE" } },
  { 
    $group: {
      _id: "$clienteId",
      valorTotal: {
        $sum: "$valorTotal"
      } 
    } 
  },
  { $sort: { valorTotal: -1 } },
  { $limit: 5 }
]);

// db.vendas.aggregate([
//   { $match: { status: { $ne: "ENTREGUE"} } },
  
// ]);

// db.vendas.aggregate([
//   { $match: { status:{ $in: ["ENTREGUE", "EM SEPARAÇÃO"] }} },
  
// ]);