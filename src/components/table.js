import React from "react";

export class TableRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {columnCount: 1};
    }

    render()
    {

        return (
            <tr id={this.props.id}>
                {this.props.columnCount}
            </tr>
        );
    }

    componentDidMount()
    {
        if(this.props.columnCount > 1)
        {
            for(let i = 1; i < this.props.columnCount; i++)
            {
                
            }
        }
        
    }
}

export default class Table extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {rowCount: 1};
    }

    render()
    {
        return (
            <table rowCount={this.props.rowCount}>
                <tbody>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}