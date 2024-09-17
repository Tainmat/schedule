import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .rbc-calendar {
    max-height: 100%;
    width: 100%;
  }

  .rbc-toolbar {
    display: none;
  }

  .rbc-timeslot-group,
  .rbc-header {
    span {
      font-family: monospace;
      font-size: 14px;
      margin-bottom: 10px;
      color: #666;
      text-align: center;
    }
  }

  .rbc-addons-dnd-row-body {
    display: none;
  }
`;
