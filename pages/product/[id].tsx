import Head from "next/head";
import styles from "../../styles/Home.module.css";
import {Drawer} from "../../components/Drawer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { allProduct } from "../../constants/AllProduct";
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material"
import { SingleProduct } from "../../types";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import {CheckCircle, Favorite, FavoriteBorder, RadioButtonUnchecked} from "@mui/icons-material"
import { Footer } from "../../components";

const Parametre = () => {
  const router = useRouter()
  const { id } = router.query
  const [currentItem,setCurrentItem]=useState<SingleProduct | null>(null)
  const [isSalad,setIsSalad]=useState<boolean>(false)
  const [isFrites,setisFrites]=useState<boolean>(true)
  const [isLegumes,setisLegumes]=useState<boolean>(false)
  
  const chooseCompleSalad=()=>{
    setIsSalad(true)
      setisFrites(false)
      setisLegumes(false)
  }
  const chooseCompleFrite=()=>{
      setIsSalad(false)
      setisFrites(true)
      setisLegumes(false)
  }
  const chooseCompleLegumes=()=>{
      setisLegumes(true)
      setIsSalad(false)
      setisFrites(false)
  }

  useEffect(() => {
   const curr=allProduct.find(item=>item.id === Number(id))
   setCurrentItem(curr)
  }, [id])
  

  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <Drawer />
        <Box className={styles.content}>
          <Stack sx={{
            m:2,
            alignItems:"center"
          }}
          direction={{xs:"column",md:"row"}}
          justifyContent='space-around'
          >
            <Box sx={{
               alignItems:"center",
               justifyContent:"center",
               alignSelf:"center",
              }}
              >
              <Typography variant="h3" sx={{color:"#c23",fontWeight:"bold"}}> {currentItem?.name} </Typography>
              <Box sx={{border:.1,color:"#ece",mt:4}}></Box>
              <Typography variant="h4" sx={{color:"#68d",fontWeight:"bold",fontStyle:"italic",letterSpacing:1,m:2}}>Incrédients</Typography>
              <Typography variant="subtitle1" sx={{color:"#000",fontWeight:"bold"}}> {currentItem?.composition} </Typography>
            </Box>
            <Box sx={{border:.1,color:"#ece",mt:4}}></Box>
            <Box sx={{
              alignItems:"center",
              justifyContent:"center",
              alignSelf:"center"
              }}>
                <Box sx={{
              alignItems:"center",
              justifyContent:"center",
              alignSelf:"center",
              height:"inherit"
              }}>
                <Image
                src={currentItem?.image || "/images/salades/salad3.png"}
                alt={currentItem?.name}
                width={300}
                height={300}
                />
                </Box>
              </Box>
            <div style={{
              alignItems:"center",
              justifyContent:"center",
              alignSelf:"center"
              }}>
                <Paper  sx={{
                  width:300,backgroundColor:'#fff',
                  height:180,alignSelf:"center", 
                  marginLeft:15,marginTop:10,
                  display: 'flex',
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"center",
                  borderRadius:3
              }}>
                <Typography variant="h5" sx={{fontWeight:"900"}}>Vous le voulez ?</Typography>
                <button type="button" className={styles.buttons}>
                  Commander maintenant
                </button>
                <button type="button" className={styles.buttons}>
                  Ajouter au panier
                </button>
                </Paper>
              </div>
          </Stack>
          <Paper sx={{m:2}}>
            <Typography variant="h4" sx={{textTransform:"uppercase",fontStyle:"oblique",backgroundColor:"#eeee",width:"450px"}}>Nos accompagnements</Typography>
            <Stack
             direction={{md:'row'}}
            >
              <div
              style={{
                display: 'flex',flexDirection:"column",alignItems:"center",marginTop:10,padding:10
              }}
              onClick={chooseCompleFrite}
              >
                <Image
                src={ "/images/accompagnements/frites.jpg"}
                alt="accomp"
                width={150}
                height={150}
                />
                {
                  isFrites ? 
                  <Checkbox  
                  icon={<CheckCircle style={{color:"#c23"}}/>
                } 
                />
                : 
                <Radio 
                icon={<RadioButtonUnchecked />} 
                disabled
                />
                }
        
              </div>
              <div
              style={{
                display: 'flex',flexDirection:"column",alignItems:"center",marginTop:10,padding:10
              }}
              onClick={chooseCompleSalad}
              >
                <Image
                src={ "/images/accompagnements/Salad.png"}
                alt="accomp"
                width={150}
                height={150}
                />
                
                {
                  isSalad ? 
                  <Checkbox  
                  icon={<CheckCircle style={{color:"#c23"}}/>} 
                />
                : 
                <Radio 
                icon={<RadioButtonUnchecked />} 
                disabled
                />
                }
              </div>
              <div
              style={{
                display: 'flex',flexDirection:"column",alignItems:"center",marginTop:10,padding:10
              }}
              onClick={chooseCompleLegumes}
              >
                <Image
                src={ "/images/accompagnements/legumes.png"}
                alt="accomp"
                width={150}
                height={150}
                />
                
                {
                  isLegumes ? 
                  <Checkbox  
                  icon={<CheckCircle style={{color:"#c23"}}/>} 
                />
                : 
                <Radio 
                icon={<RadioButtonUnchecked />} 
                disabled
                />
                }
              </div>
        
            </Stack>
          </Paper>
          <div style={{marginTop:50}}>
        <Footer />
          </div>
        </Box>
      </main>
    </div>
  );
};

export default Parametre;
