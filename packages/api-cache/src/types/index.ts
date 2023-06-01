export type Indexable<T = any> = {
	[key: string]: T
}

export type TCacheMethodReq = {
	api: string
	headers: Indexable
	params: Indexable
}

export type TCacheApi = {
	cache: (e: TCacheMethodReq) => boolean // 是否缓存(可接收当前api入参判断)
	time: number // 缓存时间(单位小时)
	cacheType: 'local' | 'session' | 'memory' // 缓存类型(memory缓存在内存里,刷新后清除)
}


export type TCache = {
	api: string // api名称
	key: string // initkey字符串
}

 type TFailBaseRes<T = any> = {
		code: 0
		data: T | null
		msg: string | null
		errorCode: string | null
		errorDesc: string | null
		error?: any
 }

  type TDefaultBaseRes<T = any> = {
		code: 1
		data: T
		msg: string | null
		errorCode: string | null
		errorDesc: string | null
 }

export type TBaseRes<T = any> = TFailBaseRes<T> | TDefaultBaseRes<T>


export type TValue = {
	data: TBaseRes // 缓存数据
	createTime: number
}

export type ReadonlyRecordable<T = any> = {
	readonly [key: string]: T
}