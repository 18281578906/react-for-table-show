import React, {useCallback, useRef} from 'react';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Table} from 'antd';
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
    const data=props.data;
    const components = {
      body: {
        row: DragableBodyRow,
      },
    };


    const moveRow = useCallback(
      (dragIndex, hoverIndex) => {
        console.log(dragIndex, hoverIndex,data);
        // const dragRow = data[dragIndex];
        props.moveLine({
          start:data[dragIndex].order_id,
          end:data[hoverIndex].order_id,
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
          components={components}
          onRow={(record, index) => ({
            index,
            moveRow,
            onDoubleClick:()=>props.clickColumn(record),
          })}
          showHeader={props.showHeader}
          pagination={props.pagination}
          rowSelection={props.rowSelection}
          scroll={{y:'170px'}}
          // bordered
          rowKey={(e)=>e.order_id}

          rowClassName={record => {
            if (record.tag !== null&&record.status===1) return 'table-color-dust';
         }}
        />
      </DndProvider>

      </>
    );
  };
  export default DragSortingTable;