// ============================================================
// COLOR TOKENS
// ============================================================
export interface ColorSwatch {
  name: string
  hex: string
  cssVar: string
  textDark?: boolean
}

export interface ColorGroup {
  title: string
  description: string
  swatches: ColorSwatch[]
}

export const colorGroups: ColorGroup[] = [
  {
    title: 'Primary',
    description: '品牌主色调（青绿色系）。用于交互元素、CTA 按钮及品牌展示场景。',
    swatches: [
      { name: 'P10',  hex: '#f4fffc', cssVar: '--color-primary-p10',  textDark: true },
      { name: 'P20',  hex: '#cafcfc', cssVar: '--color-primary-p20',  textDark: true },
      { name: 'P40',  hex: '#96fafa', cssVar: '--color-primary-p40',  textDark: true },
      { name: 'P60',  hex: '#63f7f7', cssVar: '--color-primary-p60',  textDark: true },
      { name: 'P80',  hex: '#00f2f2', cssVar: '--color-primary-p80',  textDark: true },
      { name: 'P100', hex: '#00dbdb', cssVar: '--color-primary-p100', textDark: true },
      { name: 'P120', hex: '#01c2c3', cssVar: '--color-primary-p120', textDark: true },
      { name: 'P140', hex: '#029999', cssVar: '--color-primary-p140' },
      { name: 'P160', hex: '#002f35', cssVar: '--color-primary-p160' },
    ],
  },
  {
    title: 'Neutral',
    description: '中性色调（N 系列）。用于文字、边框、背景及结构性元素。',
    swatches: [
      { name: 'N00',  hex: '#ffffff', cssVar: '--color-neutral-n00',  textDark: true },
      { name: 'N10',  hex: '#f5f5f9', cssVar: '--color-neutral-n10',  textDark: true },
      { name: 'N20',  hex: '#f1f1f5', cssVar: '--color-neutral-n20',  textDark: true },
      { name: 'N40',  hex: '#e6e6eb', cssVar: '--color-neutral-n40',  textDark: true },
      { name: 'N60',  hex: '#c7c7d7', cssVar: '--color-neutral-n60',  textDark: true },
      { name: 'N80',  hex: '#aaaabb', cssVar: '--color-neutral-n80',  textDark: true },
      { name: 'N90',  hex: '#7f7f8e', cssVar: '--color-neutral-n90',  textDark: true },
      { name: 'N100', hex: '#626276', cssVar: '--color-neutral-n100' },
      { name: 'N120', hex: '#2b2c3c', cssVar: '--color-neutral-n120' },
      { name: 'N140', hex: '#14151a', cssVar: '--color-neutral-n140' },
    ],
  },
  {
    title: 'Success',
    description: '功能绿色（G 系列）。用于确认提示、完成状态及正面反馈。',
    swatches: [
      { name: 'G20',  hex: '#f4fffc', cssVar: '--color-success-g20',  textDark: true },
      { name: 'G40',  hex: '#abeede', cssVar: '--color-success-g40',  textDark: true },
      { name: 'G100', hex: '#0db28b', cssVar: '--color-success-g100' },
      { name: 'G120', hex: '#08765c', cssVar: '--color-success-g120' },
    ],
  },
  {
    title: 'Warning',
    description: '功能黄色（Y 系列）。用于警示状态、待处理操作及柔和提醒。',
    swatches: [
      { name: 'Y20',  hex: '#fffcf4', cssVar: '--color-warning-y20',  textDark: true },
      { name: 'Y40',  hex: '#fde3a0', cssVar: '--color-warning-y40',  textDark: true },
      { name: 'Y100', hex: '#f6a508', cssVar: '--color-warning-y100', textDark: true },
      { name: 'Y120', hex: '#c17606', cssVar: '--color-warning-y120', textDark: true },
    ],
  },
  {
    title: 'Error',
    description: '功能红色（R 系列）。用于错误提示、危险操作及关键警报。',
    swatches: [
      { name: 'R20',  hex: '#fff6f4', cssVar: '--color-error-r20',  textDark: true },
      { name: 'R40',  hex: '#f9c3c8', cssVar: '--color-error-r40',  textDark: true },
      { name: 'R100', hex: '#fa4f5f', cssVar: '--color-error-r100',  textDark: true },
      { name: 'R120', hex: '#c8291f', cssVar: '--color-error-r120' },
    ],
  },
  {
    title: 'Info',
    description: '功能蓝色（B 系列）。用于信息提示、链接及辅助说明文字。',
    swatches: [
      { name: 'B20',  hex: '#f0faff', cssVar: '--color-info-b20',  textDark: true },
      { name: 'B40',  hex: '#b0e2f6', cssVar: '--color-info-b40',  textDark: true },
      { name: 'B100', hex: '#0098d5', cssVar: '--color-info-b100' },
      { name: 'B120', hex: '#00678f', cssVar: '--color-info-b120' },
    ],
  },
]

// ============================================================
// TYPOGRAPHY TOKENS
// ============================================================
export interface TypeScale {
  name: string
  tag: string
  size: string
  lineHeight: string
  weight: string
  family: string
  sample: string
}

export const typeScale: TypeScale[] = [
  // 标题 — English Headings (Roboto Condensed)
  { name: '标题/Large-英文',   tag: 'h1',   size: '24px', lineHeight: '28px', weight: '700', family: 'Roboto Condensed', sample: 'POIZON Seller Portal' },
  { name: '标题/Middle-英文',  tag: 'h2',   size: '20px', lineHeight: '28px', weight: '700', family: 'Roboto Condensed', sample: 'POIZON Seller Portal' },
  { name: '标题/Small-英文',   tag: 'h3',   size: '16px', lineHeight: '20px', weight: '800', family: 'Roboto Condensed', sample: 'POIZON Seller Portal' },
  // 标题 — Chinese Headings (Noto Sans SC Bold)
  { name: '标题/Large-中文',   tag: 'h1',   size: '20px', lineHeight: '24px', weight: '700', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  { name: '标题/Middle-中文',  tag: 'h2',   size: '16px', lineHeight: '20px', weight: '700', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  { name: '标题/Small-中文',   tag: 'h3',   size: '14px', lineHeight: '20px', weight: '700', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  // 正文 — English Body (Roboto)
  { name: '正文-英文 Regular', tag: 'p',    size: '14px', lineHeight: '20px', weight: '400', family: 'Roboto',           sample: 'POIZON Seller Portal' },
  { name: '正文-英文 Medium',  tag: 'p',    size: '14px', lineHeight: '20px', weight: '500', family: 'Roboto',           sample: 'POIZON Seller Portal' },
  { name: '辅助-英文 Regular', tag: 'span', size: '12px', lineHeight: '16px', weight: '400', family: 'Roboto',           sample: 'POIZON Seller Portal' },
  { name: '辅助-英文 Medium',  tag: 'span', size: '12px', lineHeight: '16px', weight: '500', family: 'Roboto',           sample: 'POIZON Seller Portal' },
  // 正文 — Chinese Body (Noto Sans SC)
  { name: '正文-中文 Regular', tag: 'p',    size: '14px', lineHeight: '20px', weight: '400', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  { name: '正文-中文 Medium',  tag: 'p',    size: '14px', lineHeight: '20px', weight: '500', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  { name: '辅助-中文 Regular', tag: 'span', size: '12px', lineHeight: '16px', weight: '400', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  { name: '辅助-中文 Medium',  tag: 'span', size: '12px', lineHeight: '16px', weight: '500', family: 'Noto Sans SC',     sample: '得物卖家后台' },
  // 数字 — Condensed Numbers (Roboto Condensed Bold)
  { name: '数字/特大',         tag: 'span', size: '28px', lineHeight: 'Auto', weight: '700', family: 'Roboto Condensed', sample: '¥ 1,234,567' },
  { name: '数字/大',           tag: 'span', size: '22px', lineHeight: 'Auto', weight: '700', family: 'Roboto Condensed', sample: '¥ 1,234,567' },
  { name: '数字/中',           tag: 'span', size: '20px', lineHeight: 'Auto', weight: '700', family: 'Roboto Condensed', sample: '¥ 12,400' },
  { name: '数字/小',           tag: 'span', size: '16px', lineHeight: 'Auto', weight: '700', family: 'Roboto Condensed', sample: '¥ 12,400' },
  { name: '数字/特小',         tag: 'span', size: '14px', lineHeight: 'Auto', weight: '700', family: 'Roboto Condensed', sample: '¥ 1,234' },
  { name: '数字/极小',         tag: 'span', size: '12px', lineHeight: 'Auto', weight: '600', family: 'Roboto',           sample: '¥ 1,234' },
  // 代码 — Code (JetBrains Mono)
  { name: 'Code',              tag: 'code', size: '13px', lineHeight: 'Auto', weight: '400', family: 'JetBrains Mono',   sample: 'const value = "design-token"' },
]

// ============================================================
// SPACING TOKENS
// ============================================================
export interface SpacingToken {
  name: string
  value: number
  cssVar: string
  usage: string
}

export const spacingTokens: SpacingToken[] = [
  { name: 'space-1', value: 4, cssVar: '--space-1', usage: '微间距，图标内边距' },
  { name: 'space-2', value: 8, cssVar: '--space-2', usage: '紧凑型组件内边距' },
  { name: 'space-3', value: 12, cssVar: '--space-3', usage: '元素间小间距' },
  { name: 'space-4', value: 16, cssVar: '--space-4', usage: '默认组件内边距' },
  { name: 'space-6', value: 24, cssVar: '--space-6', usage: '区域内边距，卡片间距' },
  { name: 'space-8', value: 32, cssVar: '--space-8', usage: '大型组件间距' },
  { name: 'space-12', value: 48, cssVar: '--space-12', usage: '区块分隔线' },
  { name: 'space-16', value: 64, cssVar: '--space-16', usage: '页面区块间距' },
  { name: 'space-24', value: 96, cssVar: '--space-24', usage: '主视觉区域 / 大布局间距' },
]

// ============================================================
// SHADOW TOKENS
// ============================================================
export interface ShadowToken {
  name: string
  cssVar: string
  value: string
  usage: string
  level: number
}

export const shadowTokens: ShadowToken[] = [
  { name: 'shadow-card',    cssVar: '--shadow-sm', value: '0px 2px 4px 0px rgba(0,0,0,0.05)',          usage: '卡片投影',  level: 1 },
  { name: 'shadow-tooltip', cssVar: '--shadow-md', value: '0px 2px 8px 0px rgba(43,44,60,0.10)',        usage: '提示框投影', level: 2 },
  { name: 'shadow-modal',   cssVar: '--shadow-lg', value: '0px 4px 14px 0px rgba(20,21,26,0.10)',       usage: '弹窗投影',  level: 3 },
]

// ============================================================
// BORDER RADIUS TOKENS
// ============================================================
export interface RadiusToken {
  name: string
  cssVar: string
  value: string
  usage: string
}

export const radiusTokens: RadiusToken[] = [
  { name: 'radius-none', cssVar: '--radius-none', value: '0px', usage: '表格，无圆角元素' },
  { name: 'radius-sm', cssVar: '--radius-sm', value: '4px', usage: '徽章，代码块，小型输入框' },
  { name: 'radius-md', cssVar: '--radius-md', value: '8px', usage: '按钮，输入框，标签' },
  { name: 'radius-lg', cssVar: '--radius-lg', value: '12px', usage: '卡片，面板' },
  { name: 'radius-xl', cssVar: '--radius-xl', value: '16px', usage: '弹窗，大卡片' },
  { name: 'radius-2xl', cssVar: '--radius-2xl', value: '24px', usage: '特性横幅' },
  { name: 'radius-full', cssVar: '--radius-full', value: '9999px', usage: '药丸形，头像，开关' },
]

// ============================================================
// COMPONENT DATA
// ============================================================
export interface PropRow {
  name: string
  type: string
  default: string
  description: string
}

export interface ComponentData {
  slug: string
  name: string
  category: string
  description: string
  summary: string
  props: PropRow[]
  dos: string[]
  donts: string[]
  code: string
  related: string[]
}

export const components: ComponentData[] = [
  {
    slug: 'button',
    name: '按钮 Button',
    category: 'Actions',
    description: '可点击的交互元素，用于触发操作。',
    summary: 'Button 用于传达用户可执行的操作。通常出现在表单、对话框和工具栏中。请使用合适的变体来体现操作的重要程度。',
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", default: "'primary'", description: '视觉样式，用于传达操作的层级关系' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button 的高度与内边距' },
      { name: 'icon', type: 'ReactNode', default: '—', description: '渲染在文字左侧的前置图标（加载中时隐藏）' },
      { name: 'disabled', type: 'boolean', default: 'false', description: '禁用交互，并应用灰色样式' },
      { name: 'loading', type: 'boolean', default: 'false', description: '显示加载动画，禁止点击' },
      { name: 'onClick', type: '() => void', default: '—', description: 'Button 点击时触发的回调函数' },
      { name: 'className', type: 'string', default: "''", description: '附加的 CSS 类名' },
    ],
    dos: [
      '每个区块中，Primary 用于最重要的单一操作',
      '次要/辅助操作使用 Ghost 或 Secondary',
      'Danger 仅用于破坏性、不可逆操作（删除、撤销）',
      '保持标签简洁：用"保存更改"而非"点击此处保存您的更改"',
      '异步操作时使用加载状态，以给予用户明确反馈',
    ],
    donts: [
      '不要并排放置两个 Primary 按钮——会产生歧义',
      '不要使用模糊标签，如"提交"、"确定"或"点这里"',
      '不要在不告知原因的情况下禁用按钮',
      '不要将 Danger 用于可撤销的编辑操作',
    ],
    code: `import { Button } from '@/components/ui/Button'
import { Plus, Download, Trash2 } from 'lucide-react'

// Primary — main page action
<Button variant="primary" size="md">
  Save Changes
</Button>

// With icon — left-side prefix icon
<Button variant="primary" icon={<Plus className="w-4 h-4" />}>
  新建商品
</Button>

// Secondary with icon
<Button variant="secondary" icon={<Download className="w-4 h-4" />}>
  导出数据
</Button>

// Danger with icon
<Button variant="danger" icon={<Trash2 className="w-4 h-4" />}>
  Delete Account
</Button>

// Loading state (icon is replaced by spinner)
<Button variant="primary" loading>
  Saving...
</Button>`,
    related: ['input', 'modal', 'toast'],
  },
  {
    slug: 'input',
    name: '输入框 Input Field',
    category: 'Forms',
    description: '带标签、状态与校验的文本输入框。',
    summary: 'Input 用于让用户输入和编辑文本。常见于表单、搜索框和弹窗。始终为输入框配置标签，并提供清晰的错误提示信息。',
    props: [
      { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'sm = 24px 高度，md = 32px 高度，其余样式完全一致' },
      { name: 'label', type: 'string', default: '—', description: '输入框上方的可访问标签' },
      { name: 'placeholder', type: 'string', default: '—', description: '输入框为空时显示的占位文字' },
      { name: 'hint', type: 'string', default: '—', description: '输入框下方的帮助说明文字' },
      { name: 'error', type: 'string', default: '—', description: '表单验证错误信息，以红色显示' },
      { name: 'leftIcon', type: 'ReactNode', default: '—', description: '渲染在输入框左侧的图标' },
      { name: 'rightIcon', type: 'ReactNode', default: '—', description: '渲染在输入框右侧的图标' },
      { name: 'disabled', type: 'boolean', default: 'false', description: '将输入框置为灰色，禁止交互' },
      { name: 'type', type: 'string', default: "'text'", description: 'HTML 输入类型，password 自动附带显示/隐藏切换按钮' },
      { name: '── Textarea ──', type: '', default: '', description: '' },
      { name: 'maxChars', type: 'number', default: '—', description: '启用字数限制并在右下角显示计数器' },
      { name: 'rows', type: 'number', default: '—', description: '文本框的初始行高（继承自原生 textarea）' },
    ],
    dos: [
      '始终显示可见标签——切勿仅依赖 placeholder',
      '使用提示文字说明格式要求，在用户提交前给予指引',
      '用户离开输入框后，立即显示内联验证错误',
      '使用 leftIcon 提供上下文（搜索图标、邮件图标）',
    ],
    donts: [
      '不要用 placeholder 替代标签',
      '不要在用户未交互之前显示错误状态',
      '不要在同一字段堆叠多条错误信息',
    ],
    code: `import { Input, Textarea } from '@/components/ui/Input'
import { Mail, Search, Lock } from 'lucide-react'

// ── Input — sizes
<Input size="sm" placeholder="请输入..." />
<Input size="md" label="账号" placeholder="请输入..." />

// ── Input — with icon / hint / error / disabled
<Input
  label="邮箱"
  type="email"
  placeholder="you@company.com"
  leftIcon={<Mail className="w-4 h-4" />}
  hint="我们绝不会共享您的邮箱地址。"
/>
<Input label="邮箱" defaultValue="invalid" error="请输入有效的邮箱地址" />
<Input label="账号 ID" defaultValue="ACC-00291" disabled />

// ── Password — lock icon + eye-toggle auto-added
<Input
  label="密码"
  type="password"
  placeholder="请输入密码"
  leftIcon={<Lock className="w-4 h-4" />}
/>

// ── Textarea — hover-only teal border, optional char counter
<Textarea label="商品描述" placeholder="请输入..." rows={3} />
<Textarea
  label="带字数限制"
  placeholder="最多输入 100 字..."
  maxChars={100}
  rows={3}
/>
<Textarea label="错误状态" error="描述内容不能为空" rows={3} />`,
    related: ['button', 'modal'],
  },
  {
    slug: 'badge',
    name: '标签 Badge',
    category: 'Display',
    description: '状态标签与分类徽章。',
    summary: 'Badge 用于高亮显示某项内容的状态或分类。应节制使用——过多竞争性徽章会产生视觉噪音。在密集表格中，点状变体效果更佳。',
    props: [
      { name: 'variant', type: "'default' | 'success' | 'warning' | 'error' | 'info'", default: "'default'", description: '语义颜色样式，控制背景色、边框色和文字色' },
      { name: 'dot', type: 'boolean', default: 'false', description: '在文字左侧渲染小圆点状态指示器' },
      { name: 'icon', type: 'ReactNode', default: '—', description: '在文字左侧渲染 12×12 图标（W/ Icon 类型）' },
      { name: 'onClose', type: '() => void', default: '—', description: '提供后渲染 × 关闭按钮（Closable 类型）' },
      { name: 'size', type: "'sm' | 'md'", default: "'md'", description: '保留以兼容旧接口，视觉尺寸固定为 Figma 规范单一尺寸' },
      { name: 'children', type: 'ReactNode', default: '—', description: '标签文字内容' },
    ],
    dos: [
      '使用语义变体匹配状态含义（success=绿，error=红，warning=黄，info=蓝）',
      '在密集表格行中使用 dot 变体，保持行高紧凑',
      '筛选条件、关键词等可交互标签使用 onClose 可关闭类型',
      '每项最多使用 1-2 个标签，避免视觉拥挤',
    ],
    donts: [
      '不要将 Badge 作为主要操作按钮使用',
      '不要在同一视图中混用超过 3 种颜色的标签',
      '不要使用标签传达需要即时响应的关键警报——应改用 Toast',
    ],
    code: `import { Badge } from '@/components/ui/Badge'
import { CheckCircle, AlertTriangle, AlertCircle, Info } from 'lucide-react'

// Simple — text only
<Badge variant="default">默认</Badge>
<Badge variant="success">成功</Badge>
<Badge variant="warning">警告</Badge>
<Badge variant="error">错误</Badge>
<Badge variant="info">信息</Badge>

// W/ Icon — semantic icon left of text
<Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>上线</Badge>
<Badge variant="warning" icon={<AlertTriangle className="w-3 h-3" />}>处理中</Badge>
<Badge variant="error"   icon={<AlertCircle  className="w-3 h-3" />}>失败</Badge>
<Badge variant="info"    icon={<Info         className="w-3 h-3" />}>审核中</Badge>

// Dot indicator — compact for tables
<Badge variant="success" dot>上线</Badge>
<Badge variant="warning" dot>处理中</Badge>

// Closable — renders × button
<Badge variant="default" onClose={() => removeTag('design')}>设计系统</Badge>
<Badge variant="info"    onClose={() => removeTag('new')}>新功能</Badge>`,
    related: ['table', 'data-card'],
  },
  {
    slug: 'table',
    name: '表格 Table',
    category: 'Data Display',
    description: '支持排序与分页的数据表格。',
    summary: '表格以行列形式展示结构化数据。企业级表格需要支持大数据集的排序、筛选和分页功能。控制列数——优先选择数量少但信息价值高的列。',
    props: [
      { name: 'columns', type: 'Column[]', default: '—', description: '列定义，包含 key、label 及可选的 sortable 标志' },
      { name: 'data', type: 'Record<string, any>[]', default: '—', description: '行数据对象数组' },
      { name: 'sortKey', type: 'string', default: '—', description: '当前排序的列 key' },
      { name: 'sortDir', type: "'asc' | 'desc'", default: "'asc'", description: '排序方向' },
      { name: 'onSort', type: '(key: string) => void', default: '—', description: '用户点击可排序列标题时触发的回调' },
      { name: 'pageSize', type: 'number', default: '10', description: '每页显示的行数' },
      { name: 'onRowClick', type: '(row: any) => void', default: '—', description: '点击行时触发的回调' },
    ],
    dos: [
      '数字列右对齐，使小数点保持在同一竖线上',
      '表格高度超出视窗时，使用固定表头',
      '显示行数与分页上下文（"显示第 1-10 条，共 94 条"）',
      '所有可排序列均显示排序指示器，而不仅限于当前激活的列',
    ],
    donts: [
      '少于 4 条数据时不要使用表格——改用列表',
      '不要截断关键数据——省略号可能隐藏重要信息',
      '不要在没有明确视觉指示的情况下自动排序',
    ],
    code: `const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'revenue', label: 'Revenue', sortable: true },
  { key: 'date', label: 'Date', sortable: true },
]

const data = [
  { name: 'Acme Corp', status: 'Active', revenue: '$12,400', date: '2026-02-14' },
  { name: 'Globex Inc', status: 'Pending', revenue: '$8,900', date: '2026-02-10' },
]

<DataTable columns={columns} data={data} pageSize={10} />`,
    related: ['badge', 'dropdown', 'data-card'],
  },
  {
    slug: 'modal',
    name: '对话框 Modal',
    category: 'Overlays',
    description: '用于聚焦交互的对话框遮罩层。',
    summary: 'Modal 将用户注意力集中到某项任务或决策上。适用于确认操作、表单流程和详情查看。避免嵌套弹窗——这会增加用户的认知负担。',
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: '控制弹窗的显示状态' },
      { name: 'onClose', type: '() => void', default: '—', description: '弹窗应关闭时触发的回调（点击遮罩层或按 Escape 键）' },
      { name: 'title', type: 'string', default: '—', description: '弹窗标题文字' },
      { name: 'description', type: 'string', default: '—', description: '标题下方的辅助说明文字' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: '对话框的最大宽度' },
      { name: 'children', type: 'ReactNode', default: '—', description: '弹窗主体内容' },
      { name: 'footer', type: 'ReactNode', default: '—', description: '弹窗底部的操作按钮' },
    ],
    dos: [
      '按 Escape 键或点击遮罩层关闭弹窗，保持交互可预期性',
      '每个弹窗只处理单一聚焦任务（一个表单，一次确认）',
      '弹窗打开时，将焦点锁定在弹窗内（无障碍访问）',
      '弹窗大小适配内容——避免出现大量空白',
    ],
    donts: [
      '不要在弹窗中再开启弹窗',
      '不要将 Modal 用于非关键通知——请改用 Toast',
      '除非操作确实必需，否则不要阻止用户关闭弹窗',
    ],
    code: `import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'

function DeleteDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete Record
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete record?"
        description="This action cannot be undone."
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="danger">Delete</Button>
          </>
        }
      >
        <p>All associated data will be permanently removed.</p>
      </Modal>
    </>
  )
}`,
    related: ['button', 'toast'],
  },
  {
    slug: 'dropdown',
    name: '下拉菜单 Dropdown',
    category: 'Forms',
    description: '下拉选择菜单与选项列表。',
    summary: '当空间有限时，使用 Dropdown 让用户从列表中选择选项。选项少于 4 个时，建议改用单选按钮。',
    props: [
      { name: 'label', type: 'string', default: '—', description: '显示在下拉框上方的标签' },
      { name: 'options', type: '{ label: string; value: string }[]', default: '—', description: '可选项数组' },
      { name: 'value', type: 'string', default: '—', description: '受控的选中值' },
      { name: 'onChange', type: '(value: string) => void', default: '—', description: '选择变化时触发的回调' },
      { name: 'placeholder', type: 'string', default: "'Select...'", description: '未选中时显示的占位文字' },
      { name: 'disabled', type: 'boolean', default: 'false', description: '禁止选择' },
    ],
    dos: [
      '按字母顺序排列选项，除非有特定的自定义排序需求',
      '无默认值时显示占位项（"请选择..."）',
      '较长的列表使用 optgroup 对相关选项进行分组',
    ],
    donts: [
      '不要将 Dropdown 用于仅有 2 个选项的情况——改用切换开关或单选按钮',
      '超过 15 个选项时，请添加搜索筛选功能',
    ],
    code: `const regions = [
  { label: 'North America', value: 'na' },
  { label: 'Europe', value: 'eu' },
  { label: 'Asia Pacific', value: 'apac' },
]

<Dropdown
  label="Region"
  options={regions}
  value={region}
  onChange={setRegion}
  placeholder="Select a region..."
/>`,
    related: ['input', 'table'],
  },
  {
    slug: 'tooltip',
    name: '文字提示 Tooltip',
    category: 'Overlays',
    description: '悬停或聚焦时显示的上下文提示信息。',
    summary: '当用户悬停或聚焦某元素时，Tooltip 会展示补充说明信息。内容应简短——如需较长说明，请改用弹出框或链接。',
    props: [
      { name: 'content', type: 'string | ReactNode', default: '—', description: 'Tooltip 中显示的文字或内容' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: '首选的 Tooltip 位置' },
      { name: 'delay', type: 'number', default: '400', description: '显示 Tooltip 的悬停延迟时间（毫秒）' },
      { name: 'children', type: 'ReactNode', default: '—', description: '触发元素' },
    ],
    dos: [
      '对无可见标签的纯图标按钮，使用 Tooltip 进行说明',
      'Tooltip 文字保持在一个简短句子内',
      '确保 Tooltip 在键盘聚焦时同样可访问',
    ],
    donts: [
      '不要在 Tooltip 内放置可交互内容（链接、按钮）',
      '不要在移动端使用 Tooltip——触摸设备不支持 hover 事件',
      '不要重复已在屏幕上可见的信息',
    ],
    code: `import { Tooltip } from '@/components/ui/Tooltip'
import { Settings } from 'lucide-react'

<Tooltip content="Account settings" placement="bottom">
  <button aria-label="Settings">
    <Settings className="w-5 h-5" />
  </button>
</Tooltip>

// With longer explanation
<Tooltip content="This field is required for compliance reporting">
  <InfoIcon className="w-4 h-4 text-neutral-400" />
</Tooltip>`,
    related: ['button'],
  },
  {
    slug: 'toast',
    name: '全局提示 Toast',
    category: 'Feedback',
    description: '短暂的通知消息提示。',
    summary: 'Toast 为用户操作提供简短的非阻塞式反馈，几秒后自动消失。适用于表单提交及异步操作完成后的成功/错误确认。',
    props: [
      { name: 'type', type: "'success' | 'error' | 'warning' | 'info'", default: "'info'", description: '语义类型，控制图标和颜色' },
      { name: 'title', type: 'string', default: '—', description: '简短的 Toast 标题' },
      { name: 'description', type: 'string', default: '—', description: '可选的补充说明' },
      { name: 'duration', type: 'number', default: '4000', description: '自动消失的延迟时间（毫秒）' },
      { name: 'onDismiss', type: '() => void', default: '—', description: 'Toast 关闭时触发的回调' },
      { name: 'action', type: '{ label: string; onClick: () => void }', default: '—', description: 'Toast 内的可选操作按钮' },
    ],
    dos: [
      '使用 success Toast 确认异步操作完成',
      '保持消息简洁——最好不超过 60 个字符',
      '需要撤销或跳转时，添加操作链接',
      '多条 Toast 从下到上叠加显示，最新的在最后',
    ],
    donts: [
      '不要将 Toast 用于需要用户操作才能处理的错误——改用内联错误或弹窗',
      '同时显示的 Toast 不超过 3 条',
      '非关键信息不要使用持久不消失的 Toast',
    ],
    code: `import { toast } from '@/lib/toast'

// Success
toast.success('Changes saved', {
  description: 'Your profile has been updated.',
})

// Error with action
toast.error('Export failed', {
  description: 'Could not generate CSV.',
  action: { label: 'Retry', onClick: handleRetry },
})

// Info
toast.info('Sync in progress', {
  description: 'Data is being refreshed...',
  duration: 8000,
})`,
    related: ['modal', 'button'],
  },
  {
    slug: 'data-card',
    name: '数据卡片 Data Card',
    category: 'Data Display',
    description: '适用于仪表盘的 KPI 指标卡片。',
    summary: 'Data Card 展示单个关键指标及其趋势信息。在仪表盘网格中使用（2-4 列），快速呈现运营洞察。时序数据务必包含趋势指示器。',
    props: [
      { name: 'title', type: 'string', default: '—', description: '指标标签' },
      { name: 'value', type: 'string | number', default: '—', description: '主要指标数值' },
      { name: 'subtitle', type: 'string', default: '—', description: '辅助上下文信息（如"对比上月"）' },
      { name: 'trend', type: "'up' | 'down' | 'neutral'", default: '—', description: '指标的趋势方向' },
      { name: 'trendValue', type: 'string', default: '—', description: '趋势幅度（如"+12% 本月"）' },
      { name: 'icon', type: 'ReactNode', default: '—', description: '显示在卡片右上角的图标' },
    ],
    dos: [
      '在一行中将 3-4 个相关 KPI 分组，便于仪表盘快速扫描',
      '始终将趋势方向与指标数值一起显示',
      '所有卡片使用统一的数字格式（货币、百分比等）',
    ],
    donts: [
      '不要在单张 Data Card 中放置多个指标',
      '不要省略单位——始终显示 $、% 或相关单位',
    ],
    code: `import { DataCard } from '@/components/ui/DataCard'
import { Users } from 'lucide-react'

<div className="grid grid-cols-3 gap-4">
  <DataCard
    title="Monthly Revenue"
    value="$124,500"
    subtitle="vs. last month"
    trend="up"
    trendValue="+18% vs last period"
    icon={<DollarSign className="w-4 h-4" />}
  />
  <DataCard
    title="Active Users"
    value="3,842"
    trend="up"
    trendValue="+240 this week"
    icon={<Users className="w-4 h-4" />}
  />
  <DataCard
    title="Churn Rate"
    value="2.4%"
    trend="down"
    trendValue="-0.3% improvement"
  />
</div>`,
    related: ['table', 'badge'],
  },
  {
    slug: 'navigation',
    name: '导航菜单 Navigation',
    category: 'Layout',
    description: '侧边栏导航组件。',
    summary: 'Navigation 侧边栏为多模块企业应用提供层级式导航。支持折叠区块、激活状态高亮及移动端抽屉模式。',
    props: [
      { name: 'sections', type: 'NavSection[]', default: '—', description: '导航区块数组，每项包含标签、图标和子菜单' },
      { name: 'collapsed', type: 'boolean', default: 'false', description: '仅显示图标的折叠模式（桌面端）' },
      { name: 'mobileOpen', type: 'boolean', default: 'false', description: '移动端抽屉的展开状态' },
      { name: 'onMobileClose', type: '() => void', default: '—', description: '关闭移动端抽屉的回调' },
      { name: 'footer', type: 'ReactNode', default: '—', description: '侧边栏底部内容（版本号、用户信息等）' },
    ],
    dos: [
      '顶级导航区块最多 4-6 个，避免使用户感到迷失',
      '自动展开与当前路由匹配的区块',
      '高亮当前激活的子菜单项，而非仅高亮父级区块',
      '在侧边栏底部加入版本号或"最后更新时间"标注',
    ],
    donts: [
      '导航层级不要超过 2 级',
      '每个区块不要超过 8 个子菜单项，否则应进行分组',
    ],
    code: `import { Sidebar } from '@/components/layout/Sidebar'

const sections = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    children: [
      { label: 'Overview', href: '/dashboard' },
      { label: 'Analytics', href: '/dashboard/analytics' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    children: [],
  },
]

<Sidebar
  sections={sections}
  mobileOpen={mobileOpen}
  onMobileClose={() => setMobileOpen(false)}
/>`,
    related: ['button', 'badge'],
  },
  {
    slug: 'link-button',
    name: '文字链接 Link Button',
    category: 'Actions',
    description: '文字链接按钮，无背景无边框。',
    summary: 'Link Button 用于低强调的导航或辅助操作。以纯文字形式呈现，适合内联在段落中或作为次级操作链接使用。',
    props: [
      { name: 'color', type: "'brand' | 'neutral'", default: "'brand'", description: '品牌色（P140 青绿）或黑色（N140 深黑）' },
      { name: 'icon', type: 'ReactNode', default: '—', description: '渲染在文字左侧的 12×12 前置图标' },
      { name: 'href', type: 'string', default: '—', description: '提供后渲染为 <a> 标签，否则为 <button>' },
      { name: 'disabled', type: 'boolean', default: 'false', description: '禁用交互，文字变为 N60 灰色' },
      { name: 'onClick', type: '() => void', default: '—', description: '点击回调（无 href 时使用）' },
      { name: 'className', type: 'string', default: "''", description: '附加的 CSS 类名' },
    ],
    dos: [
      '将 brand 色用于主要文字链接（外部跳转、详情页等）',
      '将 neutral 色用于段落内低强调的辅助操作',
      '有外部跳转时搭配 ExternalLink 图标，帮助用户感知',
      '内联使用时保持与正文字号一致（均为 12px）',
    ],
    donts: [
      '不要在需要明确行动号召的场景使用 Link Button，应改用 Button',
      '不要在 Link Button 上添加背景色或边框',
      '避免将 disabled 状态用于有业务含义的禁用——应在旁边说明原因',
    ],
    code: `import { LinkButton } from '@/components/ui/LinkButton'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

// Brand — teal text link
<LinkButton color="brand" href="/detail">
  查看详情
</LinkButton>

// With icon — external navigation hint
<LinkButton color="brand" icon={<ExternalLink className="w-3 h-3" />} href="https://example.com">
  外部链接
</LinkButton>

// Neutral — dark text, turns teal on hover
<LinkButton color="neutral" icon={<ArrowUpRight className="w-3 h-3" />}>
  了解更多
</LinkButton>

// Inline in paragraph
<p>
  同意我们的 <LinkButton color="brand" href="/terms">服务条款</LinkButton> 即可继续。
</p>

// Disabled
<LinkButton color="brand" disabled>
  已禁用
</LinkButton>`,
    related: ['button'],
  },
  {
    slug: 'breadcrumb',
    name: '面包屑导航 Breadcrumb',
    category: 'Navigation',
    description: '展示当前页面在层级结构中位置的导航路径。',
    summary: 'Breadcrumb 帮助用户理解当前页面在整体架构中的位置，并提供向上级页面的快速导航路径。适用于具有明确层级关系的多级页面，字重与颜色区分父级与当前页。',
    props: [
      { name: 'items', type: 'BreadcrumbItem[]', default: '—', description: '面包屑条目数组，最后一项自动渲染为当前页（加粗深色）' },
      { name: 'items[].label', type: 'string', default: '—', description: '条目显示文本' },
      { name: 'items[].href', type: 'string', default: '—', description: '父级页面链接，当前页不传入' },
      { name: 'items[].icon', type: 'ReactNode', default: '—', description: '当前页右侧的图标（如收藏星标）' },
      { name: 'className', type: 'string', default: "''", description: '附加的 CSS 类名' },
    ],
    dos: [
      '在层级超过 2 级的页面中使用面包屑',
      '当前页面始终显示为最后一项，字重加粗',
      '为父级页面添加 href 链接，便于快速返回',
      '保持标签与实际页面标题完全一致',
    ],
    donts: [
      '不要在只有一级的扁平结构中使用面包屑',
      '不要将面包屑作为主要导航，仅用作辅助定位',
      '不要让路径超过 4 级，可考虑省略中间层级',
      '不要在移动端将面包屑作为主要导航元素',
    ],
    code: `import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Star } from 'lucide-react'

// 2 层级
<Breadcrumb
  items={[
    { label: '首页', href: '/' },
    { label: '当前页面', icon: <Star className="w-3 h-3" /> },
  ]}
/>

// 3 层级
<Breadcrumb
  items={[
    { label: '首页', href: '/' },
    { label: '组件库', href: '/components' },
    { label: '面包屑导航', icon: <Star className="w-3 h-3" /> },
  ]}
/>

// 4 层级
<Breadcrumb
  items={[
    { label: '首页', href: '/' },
    { label: '组件库', href: '/components' },
    { label: '导航组件', href: '/components#nav' },
    { label: '面包屑导航', icon: <Star className="w-3 h-3" /> },
  ]}
/>`,
    related: ['navigation', 'link-button'],
  },
]

// ============================================================
// PATTERNS DATA
// ============================================================
export interface PatternData {
  id: string
  title: string
  description: string
  whenToUse: string[]
  relatedComponents: string[]
  tags: string[]
}

export const patterns: PatternData[] = [
  {
    id: 'empty-states',
    title: '空状态',
    description: '有目的、有引导地传达零数据状态——而不是一页空白。',
    whenToUse: [
      '新用户引导阶段（尚无数据）',
      '筛选结果为零时',
      '用户删除所有内容后',
      '阻止数据加载的错误状态',
    ],
    relatedComponents: ['button', 'badge'],
    tags: ['UX', '引导', '数据'],
  },
  {
    id: 'loading',
    title: '加载骨架屏',
    description: '使用骨架屏代替加载动画，以保持感知布局，降低加载焦虑。',
    whenToUse: [
      '从 API 获取数据的列表或表格视图',
      '加载多个异步数据源的仪表盘页面',
      '加载单一资源的详情页',
      '布局结构已知的内容流',
    ],
    relatedComponents: ['data-card', 'table'],
    tags: ['性能', 'UX', '异步'],
  },
  {
    id: 'forms',
    title: '表单布局',
    description: '通过清晰的分组、标签及渐进式信息披露，使表单结构合理化。',
    whenToUse: [
      '单列：简单或移动优先的表单',
      '双列：包含大量相关字段的密集表单',
      '分区：多步骤或分类设置表单',
      '向导式：分步骤的长表单',
    ],
    relatedComponents: ['input', 'button', 'dropdown'],
    tags: ['表单', 'UX', '布局'],
  },
  {
    id: 'data-table',
    title: '带筛选器的数据表格',
    description: '结合筛选控件、搜索和批量操作，为高级用户打造高效工作流。',
    whenToUse: [
      '含有大型数据集的管理后台',
      'CRM 和销售列表视图',
      '订单管理与运营报表',
      '需要查找并操作特定行数据的任何视图',
    ],
    relatedComponents: ['table', 'input', 'badge', 'dropdown'],
    tags: ['数据', '管理', '表格'],
  },
  {
    id: 'dashboard',
    title: '仪表盘布局',
    description: '将 KPI 卡片、图表和表格组合成一目了然的商业智能视图。',
    whenToUse: [
      '高管或团队级报表视图',
      '产品分析概览页',
      '运营监控仪表盘',
      '销售与营收追踪页面',
    ],
    relatedComponents: ['data-card', 'table', 'badge'],
    tags: ['数据', '布局', 'BI'],
  },
  {
    id: 'confirmation',
    title: '确认对话框',
    description: '对破坏性或不可逆操作添加明确、适当摩擦感的对话框拦截。',
    whenToUse: [
      '永久删除（记录、账户、文件）',
      '影响大量数据的批量操作',
      '向外部系统发布或提交数据',
      '撤销访问权限',
    ],
    relatedComponents: ['modal', 'button'],
    tags: ['安全', 'UX', '弹窗'],
  },
]
