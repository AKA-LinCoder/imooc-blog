//封装请求对象
const BASE_URL = "https://api.imooc-blog.lgdsunday.club/api";
function request({url,data,method}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+url,
			data:data,
			method:method,
			success:({data,statusCode,header})=>{
				if(data.success){
					//请求成功
					resolve(data);
				}else{
					//请求失败
					//给用户提示
					uni.showToast({
						title:data.message,
						icon:"error",
						mask:true,
						duration:3000
						
					});
					reject(data.message)
				}
			},
			fail:(error) =>{
				reject(error)
			}
		})
	})
}

export default request;