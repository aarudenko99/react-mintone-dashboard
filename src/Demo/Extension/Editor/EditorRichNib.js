import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Editor from "nib-core";

import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/components/Breadcrumb";

const content = {
    doc: {
        type: "doc",
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "This editor support only plain text with no formatting."
                    }
                ]
            }
        ]
    },
    selection: {
        type: "text",
        anchor: 56,
        head: 56
    }
};

class EditorRichNib extends React.Component {

    render() {
        return (
            <Aux>
                <Row className="align-items-center page-header">
                    <Col>
                        <Breadcrumb/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Rich Text Editor</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Editor
                                    config={{
                                        toolbar: {
                                            options: "top",
                                            top: {
                                                block: { grouped: true }
                                            }
                                        }
                                    }}
                                    defaultValue={content}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default EditorRichNib;