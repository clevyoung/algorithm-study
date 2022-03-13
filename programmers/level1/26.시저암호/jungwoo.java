import java.util.*;
public static String solution(String s,int n){
    // 아스키 코드 대문자 65 ~ 90
    // 아스키 코드 대문자 97 ~ 122
    char[]chars=s.toCharArray();
    List<String> strList=new ArrayList<>();
    for(char c:chars){
        int temp=c+n;
        if(Character.isUpperCase(c)){ //소문자
            temp=c+n;
            if(temp>90){
            temp=temp-90+64;
            }
        }else if(Character.isLowerCase(c)){
            temp=c+n;
            if(temp>122){
            temp=temp-122+96;
            }
        }else{
            temp=c;
        }
        strList.add(Character.toString((char)temp));
    }
    System.out.println(String.join("",strList));

    return String.join("",strList);
}

