import path from "path"
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

export const file = async (req,res) => {
  console.log(req.files)
  if (!req.files || Object.keys(req.files).length == 0){
    return  res.status(400).json({message:"No files"});
  }
  const file = req.files.file
  const fileExt = path.extname(file.name) //getting file extension
  const fileName = file.md5 + fileExt //use filename md5 from object
  
  file.mv(`./public/image/${fileName}`,async (err) => {
    if (err) {
      return err
    }
    await res.send("file berhasil diaplod");
  })
}