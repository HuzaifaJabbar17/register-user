const validate = (schema) => async (req, res, next) => {
  try {
    // console.log(schema);
    console.log(req.body);
    const parseBody = await schema.parseAsync(req.body);
    // safe parseAsync is used If you don't want Zod to throw errors when validation fails,
    // use .safeParse. This method returns an object containing either the successfully parsed data or
    //  a ZodError instance containing detailed information about the validation problems.
    // const { parseBody } = await schema.safeParse(req.body);

    req.body = parseBody;
    next();
  } catch (error) {
    // const status = 422;
    // const message = "fill the input properly";
    // const extraDetails = err.errors[0].message;

    // const error = {
    //   status,
    //   message,
    //   extraDetails,
    // };
    console.log(error);
    res.status(400).json("zod validation failed");
  }
};

module.exports = validate;
