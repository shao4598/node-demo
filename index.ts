/*
 * @Author: chase 161221294@hytera.com
 * @Date: 2022-11-16
 * @LastEditors: chase 161221294@hytera.com
 * @LastEditTime: 2022-11-16
 * @FilePath: /node-demo/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    JsonObject,
    JsonSerializer,
    JsonProperty,
  } from 'typescript-json-serializer';
  
  const json = {
    SenderID: '123456',
    SenderName: 'Tom',
    VoiceRecord: [
      {
        GUID: 'xxx-xxx-xxx',
        StartTime: '2022-11-10 10:00:00',
        EndTime: '2022-11-10 10:00:00',
      },
      {
        GUID: 'xxx-xxx-xxx',
        StartTime: '2022-11-10 10:00:00',
        EndTime: '2022-11-10 10:00:00',
      },
    ]
  };

  @JsonObject()
  class VoiceRecord {
    @JsonProperty({ name: 'GUID' })
    guid: string;

    @JsonProperty({ name: 'StartTime' })
    startTime: string;

    @JsonProperty({ name: 'EndTime' })
    endTime: string;
  }
  
  @JsonObject()
  class UserModel {
    @JsonProperty({ name: 'SenderID' })
    senderId: string;
  
    @JsonProperty({ name: 'SenderName' })
    senderName: string;

    @JsonProperty({ name: 'VoiceRecord', type: VoiceRecord  })
    voiceRecord: Array<VoiceRecord>
  }
  
  const serializer = new JsonSerializer();
  const d = serializer.deserialize(json, UserModel);
  const s = serializer.serialize(d);
  console.log(d);
  console.log(s);
