import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Board from 'react-trello';

import Aux from "../../../hoc/_Aux";
import data from "./data/task-board-base";
import Breadcrumb from "../../../App/components/Breadcrumb";

class TaskBoard extends React.Component {

    onLaneAdd = () => {
        console.log('Add Task');
    };

    render() {
        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col>
                        <Breadcrumb/>
                    </Col>
                </Row>
                <Board
                    data={data}
                    draggable
                    editable
                    canAddLanes
                    collapsibleLanes
                    className="adv-task-board"
                    addCardLink={<div className="mt-1"> <Button size="sm">Add New Card</Button></div>}
                    onLaneAdd={this.onLaneAdd}
                    addLaneTitle="+ Add New Task"
                />
            </Aux>
        );
    }
}

export default TaskBoard;