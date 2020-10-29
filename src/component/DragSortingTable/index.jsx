import React, { useCallback, useRef,useEffect } from 'react';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { Table } from 'antd';
// import update from 'immutability-helper';
// import { request } from '../../api/request'

const RNDContext = createDndContext(HTML5Backend);

const type = 'DragableBodyRow';
const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

const DragSortingTable: React.FC = (props) => {
  const columns = props.columns;
  // const [data, setData] = useState(props.data);
  const data = props.data;
  const components = {
    body: {
      row: DragableBodyRow,
    },
  };
    //遍历按钮
    const handleMapButton=(info)=>{
      var button=document.getElementsByTagName('button');
      for(var i=0;i<button.length;i++){
        if (Object.keys(info).length <=0) {
          if(button[i].innerText==='立即登录')
          button[i].disabled=false;
          else{
            button[i].disabled=true;
          }
        }
        console.log(info);
        if(info==='123456'){
          if(button[i].innerText==='维护时间导出'||button[i].innerText==='异常停机导出')
          button[i].disabled=true;
          else{
            button[i].disabled=false;
          }
        }
      }
   }
  
useEffect(()=>{
  console.log(props);
  handleMapButton(props.info)

},[props])

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      console.log(dragIndex, hoverIndex, data);
      // const dragRow = data[dragIndex];
      props.moveLine({
        start: data[dragIndex].order_id,
        end: data[hoverIndex].order_id,
      })
      // setData(
      // update(data, {
      //   $splice: [
      //     [dragIndex, 1],
      //     [hoverIndex, 0, dragRow],
      //   ],
      // })
      // );

    },
    [data, props],
  );
  const manager = useRef(RNDContext);
  //  console.log(props.data)

  return (
    <>
      <DndProvider manager={manager.current.dragDropManager}>
        <Table
          columns={columns}
          dataSource={data}
          components={props.info==='888888'&& components}
          onRow={(record, index) => ({
            index,
            moveRow,
            onDoubleClick: () => props.clickColumn(record),
          })}
          showHeader={props.showHeader}
          pagination={props.pagination}
          rowSelection={props.rowSelection}
          scroll={{ y: '170px' }}
          rowKey={(e) => e.order_id}
          rowClassName={record => {
            if ( record.status === 1 && record.tag === 3) { return 'table-color-dust'; }
            if ( record.status === 1 && record.tag === 1) return 'table-yellow-dust';
            if ( record.status === 1 && record.tag === 2) return 'table-red-dust';
          }}
        />
      </DndProvider>

    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DragSortingTable)
