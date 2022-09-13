var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxFileName="/Users/darsbir.singh/Desktop/react-native-infiniteslideshow/src/DefaultViewPageIndicator.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var DOT_SIZE=6;var DOT_SAPCE=4;var BORDER_SIZE=0.5;var styles=_reactNative.StyleSheet.create({tab:{alignItems:'center'},tabs:{flexDirection:'row',alignItems:'center',justifyContent:'center'},dot:{width:DOT_SIZE,height:DOT_SIZE,borderRadius:DOT_SIZE/2,backgroundColor:'#E0E1E2',marginLeft:DOT_SAPCE,marginRight:DOT_SAPCE,borderWidth:BORDER_SIZE,borderColor:'#E0E1E2'},curDot:{position:'absolute',width:DOT_SIZE,height:DOT_SIZE,borderRadius:DOT_SIZE/2,backgroundColor:'#80ACD0',marginHorizontal:DOT_SAPCE,borderWidth:BORDER_SIZE,borderColor:'#80ACD0',bottom:0}});var DefaultViewPageIndicator=function(_React$Component){(0,_inherits2.default)(DefaultViewPageIndicator,_React$Component);var _super=_createSuper(DefaultViewPageIndicator);function DefaultViewPageIndicator(props){var _this;(0,_classCallCheck2.default)(this,DefaultViewPageIndicator);_this=_super.call(this,props);_this.state={viewWidth:0};_this.renderIndicator=_this.renderIndicator.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(DefaultViewPageIndicator,[{key:"renderIndicator",value:function renderIndicator(page){var _this2=this;return React.createElement(_reactNative.TouchableOpacity,{style:styles.tab,key:'idc_'+page,onPress:function onPress(){return _this2.props.goToPage(page);},__self:this,__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:13}},React.createElement(_reactNative.View,{style:[styles.dot,this.props.dotStyle],__self:this,__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:17}}));}},{key:"render",value:function render(){var _this3=this;var pageCount=this.props.pageCount;var itemWidth=DOT_SIZE+DOT_SAPCE*2;var offset=(this.state.viewWidth-itemWidth*pageCount)/2+itemWidth*this.props.activePage;var offsetX=itemWidth*(this.props.activePage-this.props.scrollOffset);var left=this.props.scrollValue.interpolate({inputRange:[0,1],outputRange:[offsetX,offsetX+itemWidth]});var indicators=[];for(var i=0;i<pageCount;i++){indicators.push(this.renderIndicator(i));}return React.createElement(_reactNative.View,{style:styles.tabs,onLayout:function onLayout(event){var viewWidth=event.nativeEvent.layout.width;if(!viewWidth||_this3.state.viewWidth===viewWidth){return;}_this3.setState({viewWidth:viewWidth});},__self:this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:13}},indicators,console.log("🚀 ~ render ~ this.props.activeDotStyle",this.props.activeDotStyle),React.createElement(_reactNative.Animated.View,{style:[styles.curDot,{left:left},this.props.activeDotStyle],__self:this,__source:{fileName:_jsxFileName,lineNumber:115,columnNumber:17}}));}}]);return DefaultViewPageIndicator;}(React.Component);var _default=DefaultViewPageIndicator;exports.default=_default;