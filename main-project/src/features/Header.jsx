import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { LOGOUT_USER, selectIsLoggedIn, selectUserName } from '../redux/authSlice'
import { toast } from 'react-toastify'
import { ShowonLogin, Showonlogout } from './hiddenlinks.jsx'
import {
  Box, Button, Flex, HStack, IconButton, Text, useDisclosure, Drawer,
  DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Input,
  VStack,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { fetchCategories, selectCategories } from '../redux/categorySlice.js'

const Header = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const handleLogout = () => {
    dispatch(LOGOUT_USER())
    toast.success("loggedOut successfully")
    navigate('/')
  }
  useEffect(() => {
    if (name != '') { setUsername(name) }
  }, [isLoggedIn])

  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [categoryVisible,setCategoryVisible]=useState(false)
  const [uniqueCategories,setUniqueCategories] = useState([])
  useEffect(()=>{dispatch(fetchCategories())},[])
  const categories  = useSelector(selectCategories)
  useEffect(()=>{
      const data = [...new Set(categories.map(item=>item.name))]
      setUniqueCategories(data)
  },[uniqueCategories])

  const handleNavigate = (url) => {
    onClose()
    return navigate(url)
  }
  return (
    <>
      <Box>
        <Flex bg="black" p={2} align="center" justify="space-between" transition="all 0.3s ease">
          <HStack spacing={8} align="center">
            <IconButton icon={<HamburgerIcon />} onClick={onOpen}></IconButton>
          </HStack>
          <Text color="white" fontSize="2xl">Men's Wear</Text>
          <HStack spacing={1}>
            <Showonlogout>
            <Button colorScheme='black' onClick={() => handleNavigate('/login')}>Login</Button>
            <Button colorScheme='black' onClick={() => handleNavigate('/register')}>Rgister</Button>
            </Showonlogout>
            <ShowonLogin>
            <Button colorScheme='black'>Welcome {username}</Button>
            <Button colorScheme='black' onClick={handleLogout}>Logout</Button>
            </ShowonLogin>
          </HStack>
        </Flex>

        <Drawer isOpen={isOpen}  placement='left' onClose={onClose} >
          <DrawerOverlay />
          <DrawerContent> <DrawerCloseButton />
            <DrawerHeader>Men's Wear</DrawerHeader>
            <DrawerBody>
              <VStack spacing={2} align="start">
                  <Link onClick={() => handleNavigate('/')}>Home</Link>
                  <HStack  align="start" justify="space-between" w="100%" cursor="pointer" 
                  onClick={()=>setCategoryVisible(!categoryVisible)}>
                      <Text color="black">Categories</Text>   
                      <Text color="black">{categoryVisible ? '-' :'+'}</Text>   
                  </HStack>
                  {categoryVisible && <>
                    <VStack align="start" pl={5}>
                        {uniqueCategories.map((category,i)=> 
                        <Link key={i} onClick={() => handleNavigate(`/category/${category}`)}>{category}</Link>)}
                    </VStack>
                  </>}
                  <Link onClick={() => handleNavigate('/contact')}>Contact</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default Header
