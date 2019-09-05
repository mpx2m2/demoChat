export const showMsgTime = (data, index, showTimeInterval) =>
    (new Date(data[index].time).getTime() - new Date(data[index - 1].time).getTime()) / 1000 / 60 > showTimeInterval

export const showMsgDate = (data, index) =>
    (new Date(data[index].time).getTime() - new Date(data[index - 1].time).getTime()) / 1000 / 60 / 60 > 24