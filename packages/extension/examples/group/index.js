const lf = new LogicFlow({
  container: document.querySelector('#app'),
  grid: true,
  width: 1000,
  keyboard: {
    enabled: true
  },
  plugins: [Group,Control],
  height: 500
})

class MyGroup extends GroupNode.view {

}

class MyGroupModel extends GroupNode.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.isRestrict = true;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = '#AEAFAE';
    style.strokeDasharray = '3 3';
    style.strokeWidth = 1;
    return style;
  }
  getOutlineStyle() {
    const style = super.getOutlineStyle();
    style.stroke = 'transparent';
    style.hover.stroke = 'transparent';
    return style;
  }
}


lf.register({
  type: 'my-group',
  model: MyGroupModel,
  view: MyGroup
})

lf.render({
  nodes: [
    {
      type: 'my-group',
      x: 400,
      y: 400,
      children: [
        'rect_1'
      ]
    },
    {
      id: 'rect_1',
      type: 'rect',
      x: 400,
      y: 400
    },
    {
      id: 'rect_2',
      type: 'circle',
      x: 200,
      y: 200
    }
  ]
});

document.querySelector('#getData').addEventListener('click', () => {
  const data = lf.getGraphData();
  console.log(data);
})
document.querySelector('#render').addEventListener('click', () => {
  lf.render({
    nodes: [
      {
        type: 'circle',
        x: 300,
        y: 100
      }
    ]
  })
})