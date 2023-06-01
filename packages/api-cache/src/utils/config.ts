import type { TCacheApi, ReadonlyRecordable } from '../types/index'

/** 缓存接口枚举 */
export const CACHE_APIS: ReadonlyRecordable<TCacheApi> = {
	/** 查询证件类型或国家 */
	'/api/dictionary_web/v1/item/type': {
		cache: true,
		time: 24,
		cacheType: 'local'
	}
}
