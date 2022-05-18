import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground,TextInput} from 'react-native';
import { Icon, Input } from 'react-native-elements';

import data from '../../data.json';

const {width:WIDTH} =Dimensions.get('window');

export default class Enterprise extends React.Component{
    
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.nvt = navigation;
        this.state = {
            hmenu:false,
            nameIconmenu:'format-list-bulleted',
            //
            items:['none','none','none','none','none','none','none','none'],
            //
            miniItems:['none','none','none','none','none','none','none','none'],
            //
            nameIconitems:['chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right'],
            //
            nameIconMiniItems:['chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right'],
            img:['https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%201?$png$&jpegSize=200&wid=800','https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%204?$png$&jpegSize=100&wid=599','https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%205?$png$&jpegSize=200&wid=800'],
            n:0,
            bgColor:'#fff',
            bgIcon:'https://cdn-icons-png.flaticon.com/512/169/169367.png',
            textColor:'black',
            iconColor:'#323434',
            borderBColor:'#f3f3f3',
            bgColorB:'#f8f8f8'
        }
    }

    
    hideMenu(){
        console.log('menu clicked!')    
        this.setState({
            hmenu:!this.state.hmenu
        })
        if(this.state.hmenu == false){
            this.setState({
                nameIconmenu:'close',
                
            })
            this.resetHienItem()
        }else{
            this.setState({
                nameIconmenu:'format-list-bulleted',
            })
        }
    }

    resetHienItem(){
        this.setState({
             items:['none','none','none','none','none','none','none','none'],
        })
    }
    // an - hien item trong menu

    hideItems(n){
        console.log('items clicked!',n)
        if(this.state.items[n] == 'none'){

            let arr = this.state.items; 
            arr[n] = 'flex';
            let arricon = this.state.nameIconitems;
            arricon[n] = 'keyboard-arrow-down';
            this.setState({
                items:arr,  
                nameIconitems:arricon,
            })
        }else{
            let arr = this.state.items;
            arr[n] = 'none';
            let arricon = this.state.nameIconitems;
            arricon[n] = 'chevron-right';
            this.setState({
                items:arr,
                nameIconitems:arricon,
            })
        }
    }
    hideMiniItems(m){
        console.log('mini items clicked!',m)
        if(this.state.miniItems[m] == 'none'){
            let arr1 = this.state.miniItems; 
            arr1[m] = 'flex';
            let arricon1 = this.state.nameIconMiniItems;
            arricon1[m] = 'keyboard-arrow-down';
            this.setState({
                miniItems:arr1,  
                nameIconMiniItems:arricon1,
            })
        }else{
            let arr1 = this.state.miniItems;
            arr1[m] = 'none';
            let arricon1 = this.state.nameIconMiniItems;
            arricon1[m] = 'chevron-right';
            this.setState({
                miniItems:arr1,
                nameIconMiniItems:arricon1,
            })
        }
    }
    //di chuyen 
    toItems(m,n,p){
        this.hideMenu()
        this.nvt.navigate('enterprise',{menu:n,items:m,miniItems:p})
    }
    toMiniItems(m,n){
        this.hideMenu()
        this.nvt.navigate('enterprise',{menu:n,items:m,miniItems:'no'})
    }

    render(){
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        const { route,navigation } = this.props;
        const { menu,items,miniItems} = route.params;
        console.log(miniItems)
        return(
        <View style={{flex:1,}}>
            <View style={{flex:1,flexDirection:'row',backgroundColor:'#fff'}}>
                <TouchableOpacity style={{borderWidth:0,margin:20,padding:2,borderRadius:2,borderColor:'#323434',flex:1,justifyContent:'center',alignItems:'flex-start'}} onPress={()=>this.hideMenu()}>
                    <Icon color={'#323434'} size={30} name={this.state.nameIconmenu}/>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:0,alignItems:'center',justifyContent:'center',flex:2,flexDirection:'row'}} onPress={()=>navigation.navigate('front')}>
                    <Image style={{width:30,height:30,margin:4}} source={{uri:'https://banner2.cleanpng.com/20180325/tow/kisspng-adobe-systems-logo-adobe-creative-cloud-adobe-inde-adobe-5ab7f49920f682.781883481522005145135.jpg'}}/>
                    <Text style={{color:'red',fontWeight:'bold',fontSize:20,fontFamily:'sans-serif-thin'}}>Adobe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:0,alignItems:'center',justifyContent:'center',flex:2}}>
                    <Text style={{color:'#2c2c2c'}}>Sign in</Text>
                </TouchableOpacity>
            </View>
            {
                  this.state.hmenu ? <View style={{flex:8,position:'absolute',top:windowHeight/11,zIndex:2000,width:windowWidth,backgroundColor:'#fff',}}>
                  <ScrollView  >
  
                      <View style={{
                          flex:1,
                          backgroundColor:this.state.bgColor,
                          padding:0,
                          marginTop:0,
                          elevation:2,
                          width:windowWidth-20,
                          height:windowHeight,
                      }}> 
                          <View style={styles.input}>
                              <TextInput 
                              style={{flex:9,}}
                              placeholder={'Search'}
                              placeholderTextColor={'#7a7a7a'}
                              underlineColorAndroid='transparent'
                              onChangeText={email => this.setState({ email })}
                              />
                              <TouchableOpacity style={styles.inputIcon}>
                                  <Icon name={'search'} size={25} color={'#2d2d2d'} />
                              </TouchableOpacity>
                          </View>
                          {
                              [...Array(data.menu.length)].map((o,n) => {
                                      return(
                                          <View key={n} style={{}}>
                                              <TouchableOpacity style={{padding:10,borderBottomWidth:1,borderColor:this.state.borderBColor,height:60,}}
                                                  onPress={()=>this.hideItems(n)}>
                                                  <View style={{flex: 5,
                                                          backgroundColor: this.state.bgColor,
                                                          alignItems: 'center',
                                                          width:'100%',
                                                          flexDirection:'row',
                                                          justifyContent:'center'}}>
                                                          <Text style={{
                                                              fontSize:16,
                                                              marginLeft:12,
                                                              color:this.state.textColor,
                                                              flex:1}} >{data.menu[n].name}
                                                          </Text>
                                                          <View style={{flex:1,alignItems:'flex-end'}}>
                                                              <Icon color={'#808080'} style={{}} size={30} name={this.state.nameIconitems[n]}/>
                                                          </View>
                                                  </View>
                                              </TouchableOpacity>
                                              {
                                              [...Array(data.menu[n].items.length)].map((o,m) => {
                                                  return(
                                                      <View key={m} style={{display:this.state.items[n],}}>
                                                          {data.menu[n].items[m].miniItems.length>1?
                                                                      <View>
                                                                          <TouchableOpacity style={{padding:10,height:50,borderColor:this.state.borderBColor,borderBottomWidth:1}}
                                                                          onPress={()=>this.hideMiniItems(m)}>
                                                                              <View style={{flex: 5,
                                                                                      backgroundColor: this.state.bgColor,     
                                                                                      marginLeft:25,
                                                                                      width:windowWidth-55,
                                                                                      flexDirection:'row'
                                                                                      }}>
                                                                                  <Text style={{
                                                                                          fontSize:15,
                                                                                          color:this.state.textColor,
                                                                                          fontStyle:'italic'}} >{data.menu[n].items[m].name}</Text>
                                                                                  <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',paddingRight:'5%'}}>
                                                                                      <Icon color={'#808080'} style={{}} size={30} name={this.state.nameIconMiniItems[m]}/>
                                                                                  </View>
                                                                              </View>
                                                                          </TouchableOpacity>
                                                                          <View style={{display:this.state.miniItems[m],}}>{
                                                                          [...Array(data.menu[n].items[m].miniItems.length)].map((o,p) => {
                                                                              return(
                                                                                  <View key={p} >
                                                                                      <TouchableOpacity style={{padding:10,height:50,borderColor:this.state.borderBColor,borderBottomWidth:1}}
                                                                                      onPress={()=>this.toItems(m,n,p)}>
                                                                                          <View style={{flex: 5,
                                                                                                  backgroundColor: this.state.bgColor,     
                                                                                                  marginLeft:45,
                                                                                                  width:windowWidth-75,
                                                                                                  }}>
                                                                                              <Text style={{
                                                                                                      fontSize:15,
                                                                                                      color:this.state.textColor,
                                                                                                      fontStyle:'italic'}} >{data.menu[n].items[m].miniItems[p].name}</Text>
                                                                                          </View>
                                                                                      </TouchableOpacity>
                                                                                  </View>
                                                                              )
                                                                          })}
                                                                          </View>
                                                                      </View>
                                                                  :<View>
                                                                      <TouchableOpacity style={{padding:10,height:50,borderColor:this.state.borderBColor,borderBottomWidth:1}}
                                                                      onPress={()=>this.toMiniItems(m,n)}>
                                                                          <View style={{flex: 5,
                                                                                  backgroundColor: this.state.bgColor,     
                                                                                  marginLeft:25,
                                                                                  width:windowWidth-55,
                                                                                  }}>
                                                                              <Text style={{
                                                                                      fontSize:15,
                                                                                      color:this.state.textColor,
                                                                                      fontStyle:'italic'}} >{data.menu[n].items[m].name}</Text>
                                                                          </View>
                                                                      </TouchableOpacity>
                                                                  </View>
                                                                  }
                                                          
                                                      </View>
                                                  )}
                                                  )}
  
                                          </View>
                                      )
                                  })
                          }
                      </View>
                      
                  </ScrollView>
              </View> : null
              }
              {
                  //End header
              }

            {
                //Noi dung
            }

            <View style={{flex:10,backgroundColor:'#fff'}}>
                <ScrollView style={{flex:1}}>
                    {
                        //
                    }
                    {miniItems!='no'?<View>
                        <View style={{height:windowHeight/15,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image style={{width:26,height:25,}} source={{uri:'https://www.adobe.com/content/dam/cc/us/en/products/xd/max2019/dt_cc_mnemonic.png'}}/>
                            <Text style={{fontSize:15,fontWeight:'bold',fontFamily:'sans-serif',letterSpacing:1,}}>   Creative Cloud for Enterprise</Text>
                            <Icon name={'arrow-drop-down'} size={25} color={'grey'} />
                        </View>
                        <View style={{backgroundColor:data.menu[menu].items[items].miniItems[miniItems].bgColorA,lineHeight:50}}>
                            <Image style={{width:'90%',height:187,marginTop:30,alignSelf:'center'}} source={{uri:data.menu[menu].items[items].miniItems[miniItems].imageA}}/>
                            <View style={{flex:2,borderWidth:0,marginTop:20,marginLeft:20,marginTop:20}}>
                                <Text style={{fontSize:20,fontWeight:'400',lineHeight:50,color:data.menu[menu].items[items].miniItems[miniItems].textColorA}}>{data.menu[menu].items[items].miniItems[miniItems].title}</Text>
                                <Text style={{fontSize:30,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorA}}>{data.menu[menu].items[items].miniItems[miniItems].questionA}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorA}}>{data.menu[menu].items[items].miniItems[miniItems].answerA}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorA}}>{data.menu[menu].items[items].miniItems[miniItems].answerA1}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorA}}>{data.menu[menu].items[items].miniItems[miniItems].answerA2}</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:data.menu[menu].items[items].miniItems[miniItems].bgColorB,lineHeight:50}}>
                            <Image style={{width:'90%',height:187,marginTop:30,alignSelf:'center'}} source={{uri:data.menu[menu].items[items].miniItems[miniItems].imageB}}/>
                            <View style={{flex:2,borderWidth:0,marginTop:20,marginLeft:20,marginTop:20}}>
                                <Text style={{fontSize:20,fontWeight:'400',lineHeight:50,color:data.menu[menu].items[items].miniItems[miniItems].textColorB}}>{data.menu[menu].items[items].miniItems[miniItems].title}</Text>
                                <Text style={{fontSize:30,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorB}}>{data.menu[menu].items[items].miniItems[miniItems].questionB}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorB}}>{data.menu[menu].items[items].miniItems[miniItems].answerB}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorB}}>{data.menu[menu].items[items].miniItems[miniItems].answerB1}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorB}}>{data.menu[menu].items[items].miniItems[miniItems].answerB2}</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:data.menu[menu].items[items].miniItems[miniItems].bgColorC,lineHeight:50}}>
                            <Image style={{width:'90%',height:187,marginTop:30,alignSelf:'center'}} source={{uri:data.menu[menu].items[items].miniItems[miniItems].imageC}}/>
                            <View style={{flex:2,borderWidth:0,marginTop:20,marginLeft:20,marginTop:20}}>
                                <Text style={{fontSize:20,fontWeight:'400',lineHeight:50,color:data.menu[menu].items[items].miniItems[miniItems].textColorC}}>{data.menu[menu].items[items].miniItems[miniItems].title}</Text>
                                <Text style={{fontSize:30,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorC}}>{data.menu[menu].items[items].miniItems[miniItems].questionC}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorC}}>{data.menu[menu].items[items].miniItems[miniItems].answerC}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorC}}>{data.menu[menu].items[items].miniItems[miniItems].answerC1}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[miniItems].textColorC}}>{data.menu[menu].items[items].miniItems[miniItems].answerC2}</Text>
                            </View>
                        </View>
                    </View>:<View>
                        <View style={{height:windowHeight/15,backgroundColor:'#f8f8f8',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Image style={{width:26,height:25,}} source={{uri:'https://www.adobe.com/content/dam/cc/us/en/products/xd/max2019/dt_cc_mnemonic.png'}}/>
                            <Text style={{fontSize:15,fontWeight:'bold',fontFamily:'sans-serif',letterSpacing:1,}}>   Creative Cloud for Enterprise</Text>
                            <Icon name={'arrow-drop-down'} size={25} color={'grey'} />
                        </View>
                        <View style={{backgroundColor:data.menu[menu].items[items].miniItems[0].bgColorA,lineHeight:50}}>
                            <Image style={{width:'90%',height:187,marginTop:30,alignSelf:'center'}} source={{uri:data.menu[menu].items[items].miniItems[0].imageA}}/>
                            <View style={{flex:2,borderWidth:0,marginTop:20,marginLeft:20,marginTop:20}}>
                                <Text style={{fontSize:20,fontWeight:'400',lineHeight:50,color:data.menu[menu].items[items].miniItems[0].textColorA}}>{data.menu[menu].items[items].miniItems[0].title}</Text>
                                <Text style={{fontSize:30,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorA}}>{data.menu[menu].items[items].miniItems[0].questionA}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorA}}>{data.menu[menu].items[items].miniItems[0].answerA}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorA}}>{data.menu[menu].items[items].miniItems[0].answerA1}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorA}}>{data.menu[menu].items[items].miniItems[0].answerA2}</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:data.menu[menu].items[items].miniItems[0].bgColorB,lineHeight:50}}>
                            <Image style={{width:'90%',height:187,marginTop:30,alignSelf:'center'}} source={{uri:data.menu[menu].items[items].miniItems[0].imageB}}/>
                            <View style={{flex:2,borderWidth:0,marginTop:20,marginLeft:20,marginTop:20}}>
                                <Text style={{fontSize:20,fontWeight:'400',lineHeight:50,color:data.menu[menu].items[items].miniItems[0].textColorB}}>{data.menu[menu].items[items].miniItems[0].title}</Text>
                                <Text style={{fontSize:30,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorB}}>{data.menu[menu].items[items].miniItems[0].questionB}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorB}}>{data.menu[menu].items[items].miniItems[0].answerB}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorB}}>{data.menu[menu].items[items].miniItems[0].answerB1}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorB}}>{data.menu[menu].items[items].miniItems[0].answerB2}</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:data.menu[menu].items[items].miniItems[0].bgColorC,lineHeight:50}}>
                            <Image style={{width:'90%',height:187,marginTop:30,alignSelf:'center'}} source={{uri:data.menu[menu].items[items].miniItems[0].imageC}}/>
                            <View style={{flex:2,borderWidth:0,marginTop:20,marginLeft:20,marginTop:20}}>
                                <Text style={{fontSize:20,fontWeight:'400',lineHeight:50,color:data.menu[menu].items[items].miniItems[0].textColorC}}>{data.menu[menu].items[items].miniItems[0].title}</Text>
                                <Text style={{fontSize:30,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorC}}>{data.menu[menu].items[items].miniItems[0].questionC}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorC}}>{data.menu[menu].items[items].miniItems[0].answerC}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorC}}>{data.menu[menu].items[items].miniItems[0].answerC1}</Text>
                                <Text style={{fontSize:17,fontWeight:'400',color:data.menu[menu].items[items].miniItems[0].textColorC}}>{data.menu[menu].items[items].miniItems[0].answerC2}</Text>
                            </View>
                        </View>
                    </View>}
                    
                    {
                        // Free trial...
                    }
                    <View>
                    <View style={{height:windowHeight,marginTop:100}}>
                        <View style={{height:windowHeight/7,backgroundColor:'white',}}>   
                           <View style={{flex:4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                              <Image style={{width:75,height:75,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-icon-create-across-111x109?$png$&jpegSize=100&wid=72'}}/>
                            </View>
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:17}}>Create across desktop, web, and mobile.</Text>
                            </View>  
                        </View>   

                        <View style={{height:windowHeight/7,backgroundColor:'white',marginTop:30}}>   
                           <View style={{flex:4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                              <Image style={{width:42,height:75,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-icon-collaborate-across-65x116?$png$&jpegSize=100&wid=42'}}/>
                            </View>
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:17}}>Collaborate across apps and teams.</Text>
                            </View>  
                        </View>   

                        <View style={{height:windowHeight/7,backgroundColor:'white',marginTop:30}}>   
                           <View style={{flex:4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                              <Image style={{width:73,height:75,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-icon-adobe-sensei-113x104?$png$&jpegSize=100&wid=73'}}/>
                            </View>
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:17}}>Use features powered by Adobe Sensei AI.</Text>
                            </View>  
                        </View>   

                        <View style={{height:windowHeight/7,backgroundColor:'white',marginTop:30}}>   
                           <View style={{flex:4,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                              <Image style={{width:63,height:75,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-icon-manage-corp-licenses-98x109?$png$&jpegSize=100&wid=63'}}/>
                            </View>
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:17}}>Manage corporate licenses and security.</Text>
                            </View>  
                        </View>   
                    </View>
                <View style={{height:windowHeight,backgroundColor:'#ecf4fa'}}>
                        <View>
                          <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
                              <Image style={{width:137,height:55,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-sony-logo-sony-137x55?$png$&jpegSize=100&wid=137'}}/>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                               <Text style={{fontSize:17,color:'#0d66d0',justifyContent:'center',alignItems:'center',marginTop:50}}>Watch the video</Text>
                            </View>
                        </View>

                        <View>
                          <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                              <Image style={{width:61,height:55,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-dentsu-aegis-network-logo-dentsu.61x55?$png$&jpegSize=100&wid=61'}}/>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                               <Text style={{fontSize:17,color:'#0d66d0',justifyContent:'center',alignItems:'center',marginTop:50}}>Watch the video</Text>
                            </View>
                        </View>

                        <View>
                          <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                              <Image style={{width:97,height:55,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-ibm-logo-ibm-97x55?$png$&jpegSize=100&wid=97'}}/>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                               <Text style={{fontSize:17,color:'#0d66d0',justifyContent:'center',alignItems:'center',marginTop:50}}>Watch the video</Text>
                            </View>
                        </View>
                    </View>

            <View style={{height:windowHeight,backgroundColor:'#f89aa8'}}>
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Image style={{width:633,height:400,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cq5dam.mobile_640.640.404_v1?$png$&jpegSize=100&wid=640'}}/>
                            </View>
                            <View style={{flex:2,borderWidth:0,marginTop:20,color:'#ffff',fontFamily:'sans-serif',marginLeft:20,marginTop:20}}>
                            <Image style={{width:180,height:35,justifyContent:'center',alignItems:'center'}} source={{uri:'https://cc-prod.scene7.com/is/image/CCProdAuthor/cce-overview-logo-sonos-180x35?$png$&jpegSize=100&wid=180'}}/>
                                  <Text style={{fontSize:17,fontWeight:'400',color:'black',marginTop:30}}>“Creative Cloud has allowed us to better interact with our agencies and offices around the world. It’s also simplified our workflows, and ensures we have access to the most up-to-date technology.”</Text>
                                  <Text style={{fontSize:17,fontWeight:'400',color:'black',marginTop:30}}>Allen Mask, Vice President, Sonos</Text>
                           </View>
        

                    </View>
                    </View>
                
                </ScrollView>
                <View style={styles.footer}>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('front')}>
                <Icon style = {{}} name="home" size={25} color="grey"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('user')}>
                <Icon style = {{}} name="person" size={25} color="grey"
                />
            </TouchableOpacity>
        </View>
            </View>
        </View>
        
    )
}
};
const styles = StyleSheet.create({
    footer: {
        height:60,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
        elevation:3,
      },
      c4: { 
        padding:10,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
      },
    input:{
        width:WIDTH -60,
        height:45,
        borderRadius:4,
        fontSize:16,
        paddingLeft:10,
        borderColor:'#d3d3d3',
        borderWidth:1,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:10,
        justifyContent:'center',
        flexDirection:'row',
    },
    inputIcon:{
        flex:1,
        //borderWidth:1,
        paddingRight:5,
        alignSelf:'center',
        height:'100%',
        justifyContent:'center'
    },
});

