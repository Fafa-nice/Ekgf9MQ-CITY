export const questions =[];


const templates =[
    { text: "周末的早晨，你通常会怎么度过？", traits: ['E', 'I', 'S', 'F'] },
    { text: "如果有一笔意外之财，你会用来？", traits: ['M', 'T', 'N', 'U'] },
    { text: "你理想的窗外风景是？", traits:['N', 'U', 'W', 'C'] },
    { text: "面对突如其来的变化，你的第一反应是？", traits:['F', 'S', 'E', 'I'] },
    { text: "与朋友聚会，你更偏好？", traits: ['E', 'I', 'U', 'N'] }
];

const optionTexts = [["出门探索新咖啡馆", "在家看书听音乐", "去公园跑步", "立刻处理未完的工作"],["投资最新科技产品", "购买古董艺术品", "策划一场野外徒步", "享受顶级米其林餐厅"],["茂密的森林与山脉", "繁华的城市天际线", "阳光沙滩与海浪", "白雪皑皑的小镇"],["兴奋地寻找新机遇", "感到焦虑需要时间适应", "与朋友商讨对策", "独自冷静思考"],["热闹的酒吧派对", "两三知己的私密晚餐", "户外露营烧烤", "一起去逛展览"]
];

for(let i=0; i<50; i++) {
    const tIndex = i % templates.length;
    const t = templates[tIndex];
    const opts = optionTexts[tIndex];
    
    questions.push({
        id: i + 1,
        text: `${i+1}. ${t.text}`,
        options: [
            { text: opts[0], trait: t.traits[0] },
            { text: opts[1], trait: t.traits[1] },
            { text: opts[2], trait: t.traits[2] },
            { text: opts[3], trait: t.traits[3] }
        ]
    });
}
