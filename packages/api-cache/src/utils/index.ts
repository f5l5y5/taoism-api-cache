import fs from 'fs'
import ts from 'typescript'
import vm from 'vm'

export function readConfig(configPath: string): any {
	// 1. 读取文件内容
	const content = fs.readFileSync(configPath, { encoding: 'utf-8' })

	// 2. 使用 TypeScript 编译器 API 将 TypeScript 代码转换为 JavaScript
	const result = ts.transpileModule(content, {
		compilerOptions: { module: ts.ModuleKind.CommonJS }
	})
	const compiledCode = result.outputText

	// 3. 使用 vm 模块将生成的 JavaScript 代码作为模块运行，并导出结果
	const script = new vm.Script(compiledCode, { filename: configPath })
	const module = { exports: {} }
	const context = vm.createContext({ module, exports: module.exports, require })
	script.runInContext(context)

	return module.exports
}

// // 使用 readConfig 函数读取项目中名为 cache.ts 的配置文件
// const configPath = path.resolve(__dirname, './config.ts')
// const config = readConfig(configPath)
// console.log(config)
