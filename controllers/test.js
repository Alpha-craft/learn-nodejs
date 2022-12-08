
export const test = async (req,res) =>{
  res.json({id:req.params.id})
  
  console.log(req.params)
}

export const bruh = async(req, res) => {
  res.json({payload:req.params.payload})
}

export const post = async (req,res) => {
  console.log(req.body)
  res.json({message:'berhasil'})
}