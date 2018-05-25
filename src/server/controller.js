module.exports = {
  addProduct: (req, res) => {
    const db = req.app.get("db");
    const { urlInput, nameInput, priceInput } = req.body;

    console.log(req.body);
    db
      .add_product([urlInput, nameInput, priceInput])
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  }
};
